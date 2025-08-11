import styled from "styled-components";
import { Btnsave } from "../moleculas/Btnsave";
import { useUsuariosStore } from "../../store/UsuariosStore";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
export function LoginTemplate() {
  const navigate = useNavigate();
  const { insertarUsuarioAdmin } = useUsuariosStore();
  const mutationInsertUser = useMutation({
    mutationKey: ["insertarUsuarioAdmin"],
    mutationFn: async () => {
      const p = {
        correo: "pruebas1@gmail.com",
        pass: "123456",
      };
      const dt = await insertarUsuarioAdmin(p);
      if (dt) {
        navigate("/");
      }
    },
  });
  return (
    <Container>
      <Btnsave
        titulo="Crear Cuenta"
        bgcolor="#fff"
        funcion={mutationInsertUser.mutateAsync}
      />
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
`;
