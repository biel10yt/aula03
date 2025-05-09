import { View, Text } from 'react-native'
import React, { use } from 'react'

const CursoFormScreen = ({ route, navigation }) => {

    const itemId = route.params?.itemId
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [editing, setEditing] = useState(false)

    useEffect(() => {
        if (itemId) {
            const buscarCurso = async () => {
                const docRef = doc(db, 'cursos', itemId)
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()) {
                    setName(docSnap.data().name)
                    setDescription(docSnap.data().description)
                    setEditing(true)
                } 
            }
            buscarCurso()
        }
    }, [itemId])
  return (
    <View>
      <Text>CursoFormScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#f5f5f5' },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
    input: { borderBottomWidth: 1, marginBottom: 20, padding: 8 },
    })

export default CursoFormScreen