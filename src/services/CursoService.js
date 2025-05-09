import { addDoc, collection, deleteDoc, getDocs, updateDoc } from 'firebase/firestore'
import { db } from '../config/firebaseConfig'

const cursosRef = collection(db, 'cursos')

// busca todos os cursos no banco de dados
export const getCursos = async () => {
    const snapshot = await getDocs(cursosRef)
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

// Adiciona um novo curso no banco de dados
export const adicionarCurso = async (curso) => {
    const docRef = await addDoc(cursosRef, curso)
    return docRef.id
}

// Atualiza um curso no banco de dados
export const atualizarCurso = async (id, novosDados) => {
    const cursoRef = doc(db, 'cursos', id)
    await updateDoc(cursoRef, novosDados)
}

// Deleta um curso no banco de dados
export const deletarCurso = async (id) => {
    const cursoRef = doc(db, 'cursos', id)
    await deleteDoc(cursoRef)
}