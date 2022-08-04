import "./Login.css";


const Login = () => 
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
            <h5>Inicio de sesion</h5>
            <div class="grupo">
                <input type="email" name="" id="email" required /><span className="barra"></span>
                <label for="">Email</label>
            </div>
            <div class="grupo">
                <input type="password" name="" id="password" required /><span className="barra"></span>
                <label for="">Password</label>
            </div>
            <h4>no tienes cuenta de usueario? click aqui</h4>
            <button type="submit">Acceder</button>
        </div>
    </form>
    );
}


export default Login;