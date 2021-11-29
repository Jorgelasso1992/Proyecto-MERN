import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import Axios from 'axios'
import Swal from 'sweetalert2'
import { Button, Modal, Form } from 'react-bootstrap'
import "../assets/css/SeccionUsuario.css";

export default function SeccionTareas() {

  //-------------

  const [tareas, setTareas] = useState([])
  const [idTarea, setIdTarea] = useState('')

  useEffect(() => {
    obtenerTareas()
  }, [])

  const obtenerTareas = async () => {
    const id = sessionStorage.getItem('idUsuario')
    const token = sessionStorage.getItem('token')
    const respuesta = await Axios.get('/tareas/listarTareasDocente/' + id, {
      headers: { 'autorizacion': token }
    })

    console.log(respuesta)
    setTareas(respuesta.data)
  }

  const data = tareas.map((tarea) => ({
    id:tarea._id,
    titulo:tarea.titulo,
    descripcion:tarea.descripcion,
    fechaEntrega:tarea.fechaEntrega
  }))

  //-------------

  const [showActualizar, setShowActualizar] = useState(false);

  const handleClose2 = () => setShowActualizar(false);

  const obtenerTarea = async (idParametro) => {
    setShowActualizar(true)

    const id = idParametro
    const token = sessionStorage.getItem('token')
    const respuesta = await Axios.get('/tareas/listar/' + id, {
      headers: { 'autorizacion': token }
    })

    console.log(respuesta.data)

    setIdTarea(respuesta.data._id)
    setTitulo(respuesta.data.titulo)
    setDescripcion(respuesta.data.descripcion)
    setFechaEntrega(respuesta.data.fechaEntrega)
  }

  //-------------

  const actualizar = async (e) => {
    e.preventDefault();
    const id = idTarea
    const token = sessionStorage.getItem('token')
    const tarea = {
      titulo,
      descripcion,
      fechaEntrega
    }

    const respuesta = await Axios.put('/tareas/actualizar/' + id, tarea, {
      headers: { 'autorizacion': token }
    })

    const mensaje = respuesta.data.mensaje

    obtenerTareas()

    Swal.fire({
      icon: 'success',
      title: mensaje,
      showConfirmButton: false,
      timer: 1500
    })

    setShowActualizar(false)
  }

  //-------------

  const eliminar = async (id) => {
    const token = sessionStorage.getItem('token')

    const respuesta = await Axios.delete('/tareas/eliminar/' + id, {
      headers: { 'autorizacion': token }
    })

    const mensaje = respuesta.data.mensaje

    Swal.fire({
      icon: 'success',
      title: mensaje,
      showConfirmButton: false,
      timer: 1500
    })

    obtenerTareas()

  }

  // const [titulo, setTitulo] = useState('')
  // const [descripcion, setDescripcion] = useState('')


// const handleClose = () => setShow(false);

//-------------

const [titulo,setTitulo] = useState('')
const [descripcion,setDescripcion] = useState('')
const [fechaEntrega,setFechaEntrega] = useState('')

    const registro = async (e) => {
        e.preventDefault()
        const token = sessionStorage.getItem('token')
        const usuario = {titulo,descripcion,fechaEntrega,correoDocente:sessionStorage.getItem('idUsuario')}
        const respuesta = await Axios.post('./tareas/crear',usuario,{ headers:{'autorizacion':token}})
        console.log(respuesta)
        const mensaje = respuesta.data.mensaje

        if(mensaje!=='Tarea Creada'){
            Swal.fire({
                icon:'error',
                title:mensaje,
                showConfirmButton:false,
                timer:1500
             })
        }else{
            Swal.fire({
                icon:'success',
                title:'Tarea Creada',
                showConfirmButton:false,
                timer:1500
             })

            obtenerTareas()

            // handleClose()
        }
    }   

  return (
    <div className="seccionUsuario">
      <br />
      <div className="container-usuario">
        <div className="row-usuario">
          <div className="col-md-6-usuario" >
            <Form className="form-usuario">
              <Form.Group className="mb-3" controlId="formNombres">
                <Form.Label style={{width:'100%', fontSize:'20px'}}>Titulo</Form.Label>
                <Form.Control type="text" placeholder="Introducir titulo de la tarea" onChange={(e) => setTitulo(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formDescripcion" >
                <Form.Label style={{width:'100%' ,fontSize:'20px'}}>Descripción</Form.Label>
                <Form.Control as="textarea" placeholder="Introducir descripción de la tarea" rows={5} onChange={(e) => setDescripcion(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formFechaEntrga">
                <Form.Label style={{width:'100%', fontSize:'20px'}}>Fecha de Creación</Form.Label>
                <Form.Control type="date" placeholder="Introducir fecha de la tarea" onChange = {(e) => setFechaEntrega(e.target.value)} />
                </Form.Group>
              <Button variant="primary" onClick={registro} >
                Crear Tarea
              </Button>
            </Form>
          </div>
        </div>
        <div className="column-usuario">
          <MaterialTable
            title={"Tareas de " + sessionStorage.getItem('nombres')}
            columns={[
              // { title: 'ID', field: 'id'},
              { title: 'Titulo', field: 'titulo' },
              { title: 'Descripcion', field: 'descripcion' },
              { title: 'Fecha de Entrega', field: 'fechaEntrega' },
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
                icon: 'delete',
                tooltip: 'Eliminar',
                onClick: (event, rowData) => eliminar(rowData.id)
              },

              {
                icon: 'edit',
                tooltip: 'Editar',
                onClick: (event, rowData) => obtenerTarea(rowData.id)
              },
            ]}
          />
        </div>
      </div>

      <Modal show={showActualizar} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form >
            <Form.Group className="mb-3" controlId="formNombres">
              <Form.Label>Titulo</Form.Label>
              <Form.Control type="text" placeholder="Introducir titulo de la tarea" onChange={(e) => setTitulo(e.target.value)} value={titulo} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formApellidos" >
              <Form.Label>Descripción</Form.Label>
              <Form.Control as="textarea" placeholder="Introducir descripción de la tarea" rows={5} onChange={(e) => setDescripcion(e.target.value)} value={descripcion} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formFechaEntrga">
                <Form.Label>Fecha de Creación</Form.Label>
                <Form.Control type="date" placeholder="Introducir fecha de la tarea" onChange = {(e) => setFechaEntrega(e.target.value)} value={fechaEntrega}/>
                </Form.Group>
          </Form>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={actualizar}>
              Guardar
            </Button>
          </Modal.Footer>
        </Modal.Body>

      </Modal>
    </div>
  )
}
