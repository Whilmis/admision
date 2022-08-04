import "./CrearUsuario.css";


const CrearUsuario = () => 
{

       // <div className="grupo">
      /* <input type="text" name="" id="name" required/><span className="barra"></span>
       <label for="">Nombre</label>
   </div>*/
    return(
        <form action=""  id="form">
        <div class="form">
            <h1>COMPASS POINT</h1>
            <h4>Sistema de admision</h4>
            <h5>Crear usueario</h5>
            <div className="grupo">
            <input type="text" name="" id="name" required/><span className="barra"></span>
            <label for="">Nombre</label>
            </div>

            <div className="grupo">
            <input type="text" name="" id="apellido" required/><span className="barra"></span>
            <label for="">apellido</label>
            </div>
            <div class="grupo">
                <input type="email" name="" id="email" required /><span className="barra"></span>
                <label for="">Email</label>
            </div>
            <div class="grupo">
                <input type="password" name="" id="password" required /><span className="barra"></span>
                <label for="">Contraseña</label>
            </div>

            <div class="grupo">
                <input type="password" name="" id="passwordc" required /><span className="barra"></span>
                <label for="">Confirmar Contraseña</label>
            </div>
         
            <button type="submit">Crear</button>
        </div>
    </form>
    );
}


export default CrearUsuario;