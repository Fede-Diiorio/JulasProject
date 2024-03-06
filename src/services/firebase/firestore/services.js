import { db } from '../firebaseConfig';
import { collection, getDocs } from "firebase/firestore"

export const getServices = () => {
    const servicesCollection = collection(db, 'services')
    return getDocs(servicesCollection).then(querySnapshot => {
        const servicesAdapted = querySnapshot.docs.map(doc => {
            const fields = doc.data()
            return { id: doc.id, ...fields }
        })
        return servicesAdapted
    }).catch(error => {
        return error
    })
}