import React, {useState,useEffect} from 'react'
import MaterialTable from 'material-table'
import Axios from 'axios'
import {Button,Modal} from 'react-bootstrap'
import "../assets/css/admin.css"


export default function AdministradorDocentes() {

    const[docentes,setDocentes]=useState([])
    const [show, setShow] = useState(false);

    useEffect(() => {
        obtenerDocentes()
    },[])

    const handleClose = () => setShow(false);
    
    //-------------------------

    const obtenerDocentes = async() => {
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('/docente/listar',{
        headers:{'autorizacion':token}
        })
    
        console.log(respuesta)
        setDocentes(respuesta.data)
    }
    
    const data = docentes.map((docente) => ({
        id:docente._id,
        nombres:docente.nombres,
        apellidos:docente.apellidos,
        correo:docente.correo
    }))

    //-------------------------

    const[tareas,setTareas]=useState([])

    const obtenerTareas = async(id) => {
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('/tareas/listarTareasDocente/'+id,{
          headers:{'autorizacion':token}
        })
      
        console.log(respuesta)
        setTareas(respuesta.data)

          setShow(true)
      }
       
      const data2 = tareas.map((tarea) => ({
        id:tarea._id,
        titulo:tarea.titulo,
        descripcion:tarea.descripcion,
        fechaEntrega:tarea.fechaEntrega
      }))

    //-------------------------

    return (
        <div className="admin">
            <MaterialTable
                title={'Docentes'}
                columns={[
                    // { title: 'ID', field: 'id'},
                    { title: 'Nombres', field: 'nombres' },
                    { title: 'Apellidos', field: 'apellidos' },
                    { title: 'Correo', field: 'correo' },
                ]}

                data={data} 

                options={{
                    pageSize: 50,
                    search: true,
                    actionsColumnIndex: -1,
                    initialPage: 1,
                    maxBodyHeight: "350px",
                }}
                actions={[
                    {
                      icon:'chevron_right',
                      tooltip:'Ver Tareas',
                      onClick:(event,rowData) => obtenerTareas(rowData.id)
                    },
                  ]}
            />   

            <Modal show={show} onHide={handleClose} size={"xl"}>
                <Modal.Header closeButton>
                    
                </Modal.Header>
                <Modal.Body>
                    
                <MaterialTable
                    title={"Tareas"}
                    columns={[
                        // { title: 'ID', field: 'id'},
                        { title: 'Titulo', field: 'titulo' },
                        { title: 'Descripcion', field: 'descripcion' },
                        { title: 'Fecha de Entrega', field: 'fechaEntrega' },
                    ]}

                    data={data2} 

                    options={{
                        search: true,
                        actionsColumnIndex:-1,
                        initialPage:1
                    }}
                />
               
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                    </Button>
                </Modal.Footer>
                </Modal.Body>
                
            </Modal>


        </div>
    )
}


