import React from "react";
import "../App.css";

export function Tarjeta(props) {
    <div id="tarjeta">
        <div id="contenedor-tarjeta" class="tarjeta-oculta">
            <div id="front">
                <button id="cerrar-tarjeta" class="cerrar-tarjeta">X</button>
                <div id="title-card-front" class="title-card">
                    <h2>Título de la tarjeta emergente</h2>
                </div>
                <form id="form-login" action="Login.php" method="POST">
                    <label for="username">Nombre de usuario:</label>
                    <input type="text" id="username" name="username" />

                    <label for="password">Contraseña:</label>
                    <input type="password" id="password" name="password" />

                    <button id="btn-inicio-sesion" type="submit">Iniciar sesión</button>
                </form>
                <div class="preguntas">
                    <p>
                        ¿No tienes una cuenta?
                        <button id="btn-registro">Regístrate aquí</button>
                    </p>
                    <p>
                        <a href="recuperar-contraseña.html">¿Olvidaste tu contraseña?</a>
                    </p>
                </div>
            </div>
            <div id="tarjeta-registro" >
                <button id="cerrar-tarjeta2" class="cerrar-tarjeta">X</button>
                <div id="title-card-back" class="title-card">
                    <h2>Registrate Aqui</h2>
                </div>
                <form id="form-registro" action="registro.php" method="POST">

                    <input type="text" id="user" name="user" placeholder="Ingrese su correo electronico" />

                    <input type="text" id="user2" name="user2" placeholder="Repita su correo electronico" />

                    <input type="password" id="pass" name="pass" placeholder="Contraseña" />

                    <input type="password" id="pass2" name="pass2" placeholder="Repita su contraseña" />

                    <button id="btn-registr">Registrarse</button>
                </form>
            </div>
        </div>
    </div>
}