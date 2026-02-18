import { createContext, useEffect, useState } from "react";
import { auth, db } from "../service/firebase";
import {
    collection,
    addDoc,
    onSnapshot,
    query,
    where,
    orderBy,
    deleteDoc,
    doc,
    updateDoc
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export const taskContext = createContext();


export const TaskProvider = ({ children }) => {

    const [tasks, setTasks] = useState(["data strutcher"]);

    useEffect(() => {
        const unsubAuth = onAuthStateChanged(auth, (user) => {
            if (!user) {
                setTasks([]);
                return;
            }

            const q = query(
                collection(db, "post"),
                where("userId", "==", user.uid),
                orderBy("createdAt", "desc")   // 🔥 newest first
            );

            const unsubSnap = onSnapshot(q, (snap) => {
                const arr = [];
                snap.forEach((doc) => {
                    arr.push({
                        id: doc.id,
                        ...doc.data(),
                    });
                });

                setTasks(arr);
            });

            return () => unsubSnap();
        });

        return () => unsubAuth();
    }, []);




    const addTasks = async (text) => {
        const user = auth.currentUser;

        await addDoc(collection(db, "post"), {
            text: text,
            userId: user.uid,
            createdAt: new Date(),
        });
    };


    // DELETE  (firebase delete  )

    const deleteTask = async (id) => {
        try {
            // delete from firebase
            await deleteDoc(doc(db, "post", id));
 

        } catch (error) {
            console.log("Delete error:", error.message);
        }
    };



    const [editState, setEditState] = useState({
        item: null,
        isEditing: false,
    });

    // EDIT
    const editTask = (item) => {
        setEditState({
            item,
            isEditing: true,
        });
    };


    const updateTask = async (id, text) => {
        if (!id) return;
        if (!text.trim()) return;

        try {
            const ref = doc(db, "post", id);
            await updateDoc(ref, {
                text: text,
            });
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <taskContext.Provider
            value={{ tasks, addTasks, deleteTask, editTask, editState, updateTask,setEditState }}
        >
            {children}
        </taskContext.Provider>
    );
};
