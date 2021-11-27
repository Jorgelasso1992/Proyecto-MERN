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
    id: tarea._id,
    titulo: tarea.titulo,
    descripcion: tarea.descripcion,
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
  }

  //-------------

  const actualizar = async (e) => {
    e.preventDefault();
    const id = idTarea
    const token = sessionStorage.getItem('token')
    const tarea = {
      titulo,
      descripcion
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

  //-------------

  const [show, setShow] = useState(false);

  const crearTarea = async (e) => {
    setShow(true)
  }

  const handleClose = () => setShow(false);

  //-------------

  const [titulo, setTitulo] = useState('')
  const [descripcion, setDescripcion] = useState('')


  const registro = async (e) => {
    e.preventDefault()
    const token = sessionStorage.getItem('token')
    const usuario = { titulo, descripcion, correoDocente: sessionStorage.getItem('idUsuario') }
    const respuesta = await Axios.post('./tareas/crear', usuario, { headers: { 'autorizacion': token } })
    console.log(respuesta)
    const mensaje = respuesta.data.mensaje

    if (mensaje !== 'Tarea Creada') {
      Swal.fire({
        icon: 'error',
        title: mensaje,
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Tarea Creada',
        showConfirmButton: false,
        timer: 1500
      })

      obtenerTareas()

      handleClose()
    }
  }

  //-------------
  return (
    <div className="seccionUsuario">
      <br />
      <div className="container-usuario">
        <div className="row justify-content-center text-center">
          <div className="col-md-6" >
            <Form >
              <Form.Group className="mb-3 text-center" controlId="formNombres">
                <Form.Label className="text-center justify-content-centerr"><h5 className="justify-content-center text-center">Titulo</h5></Form.Label>
                <Form.Control type="text" placeholder="Introducir titulo de la tarea" onChange={(e) => setTitulo(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formNombres" >
                <Form.Label className="text-center justify-content-center"><h5 className="justify-content-center text-center">Descripción</h5></Form.Label>
                <Form.Control as="textarea" placeholder="Introducir descripción de la tarea" rows={5} onChange={(e) => setDescripcion(e.target.value)} />
              </Form.Group>
              <Button variant="primary" onClick={registro} >
                Crear Tarea
              </Button>
            </Form>
          </div>
        </div>
        <div className="column">
          <MaterialTable
            title={"Tareas de " + sessionStorage.getItem('nombres')}
            columns={[
              // { title: 'ID', field: 'id'},
              { title: 'Titulo', field: 'titulo' },
              { title: 'Descripcion', field: 'descripcion' },
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
