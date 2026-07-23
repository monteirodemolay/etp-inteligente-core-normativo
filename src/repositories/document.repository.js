import {
    getFirestore,
    collection,
    doc,
    getDoc,
    getDocs,
    setDoc,
    updateDoc,
    deleteDoc,
    query,
    where,
    orderBy,
    limit
} from "firebase/firestore";

import db from "../config/firebase.js";
import { COLLECTIONS } from "../constants/collections.js";

const COLLECTION = COLLECTIONS.DOCUMENTS;

export default class DocumentRepository {

    static async save(document) {

        await setDoc(
            doc(db, COLLECTION, document.id),
            document.toJSON()
        );

    }

    static async update(id, data) {

        await updateDoc(
            doc(db, COLLECTION, id),
            data
        );

    }

    static async findById(id) {

        const snapshot = await getDoc(
            doc(db, COLLECTION, id)
        );

        if (!snapshot.exists()) return null;

        return {
            id: snapshot.id,
            ...snapshot.data()
        };
    }

    static async delete(id) {

        await deleteDoc(
            doc(db, COLLECTION, id)
        );

    }

    static async findAll() {

        const snapshot = await getDocs(
            collection(db, COLLECTION)
        );

        return snapshot.docs.map(doc => doc.data());

    }

    static async findByType(type) {

        const q = query(
            collection(db, COLLECTION),
            where("tipo", "==", type)
        );

        const snapshot = await getDocs(q);

        return snapshot.docs.map(doc => doc.data());

    }

    static async findRecent(limitValue = 20) {

        const q = query(
            collection(db, COLLECTION),
            orderBy("atualizadoEm", "desc"),
            limit(limitValue)
        );

        const snapshot = await getDocs(q);

        return snapshot.docs.map(doc => doc.data());

    }

}