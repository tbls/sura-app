import { useDispatch } from 'react-redux';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { login } from '../../store/auth/authSlice';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const iniciarSesion = () => {
    dispatch(login());
  };

  return (
    <div className="mx-auto col-10 col-sm-6 col-md-4 col-lg-3 border border-secondary border-2 p-3 mt-5">
      <h1>LoginPage</h1>

      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" placeholder="Correo" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
      </Form>

      <Button className="mx-auto" onClick={iniciarSesion}>
        Iniciar Sesión
      </Button>
    </div>
  );
};
