<template>

    <div class="bg-degrade login-container d-flex align-items-center justify-content-center">

        <div class="card p-4 text-center">

            <div class="card-body">

                <div class="logo mb-3">

                    <img src="/logo.png" alt="Pharmacy Logo">

                </div>

                <h5 class="card-title mb-4">CONTROL DE INVENTARIO</h5>

                <form>

                    <div class="mb-3 input-group">

                        <span class="input-group-text">

                            <img src="/user.png" alt="User Logo" class="icon">

                        </span>

                        <input type="text" class="form-control" placeholder="Ingrese su usuario" required />

                    </div>

                    <div class="mb-3 input-group">

                        <span class="input-group-text">

                            <img src="/key.png" alt="Key Logo" class="icon">

                        </span>

                        <input type="password" class="form-control" placeholder="Ingrese su contraseña" required />

                    </div>

                    <div class="form-check mt-4">

                        <input type="checkbox" class="form-check-input" id="rememberMe" />

                        <label class="form-check-label" for="rememberMe">Recordar contraseña</label>

                    </div>

                    <button type="submit" class=" col-12 mt-4">
                        LOGIN<span></span>
                    </button>

                </form>

            </div>

        </div>

    </div>

</template>

<script>



</script>

<style scoped>

.bg-degrade {
    background: linear-gradient(to right, var(--deep-blue-color), var(--teal-dark-color), var(--teal-light-color), var(--turquoise-bright-color));
}

.login-container {
    height: 100vh;
}

.card {
    background: rgba(255, 255, 255, 0.288);
    border: 2px solid var(--white-color);    
    width: 80%;
    height: 60%;
    max-width: 400px;
    border-radius: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.card-title {
    font-weight: bold;
    color: #333;
}

input::placeholder {
    font-size: 0.9rem;
    color: #a3a3a3;
}

.form-check {
    text-align: left;
}

.logo img {
    width: 55%;
    height: 55%;
    background-color: rgb(0, 53, 87);
    border-radius: 30%;
}

.icon {
    width: 25px;
    height: 25px;
    color: rgb(0, 53, 87);
}

button {
    background-color: rgb(0, 53, 87);
    color: var(--white-color);
    font-size: 0.8rem;
    padding: 5px 10px;
    border-radius: 25px;
    transition: background-color 0.3s, transform 0.3s;
}

/* .animate__slow {
    animation-duration: 5s;
}

.btn-6 {
    position: relative;
    display: block;
    overflow: hidden;
    text-transform: uppercase;
    border: 1px solid currentColor;
    color: var(--white-anti-flash-color);
    transition: color 0.4s ease-in-out, background-color 0.4s ease-in-out;
}

.btn-6 span {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: var(--gray-color);
    transition: width 0.4s ease-in-out, height 0.4s ease-in-out;
    transform: translate(-50%, -50%);
    z-index: -1;
}

.btn-6:hover {
    color: var(--white-anti-flash-color);
}

.btn-6:hover span {
    width: 225%;
    height: 562.5px;
} */

</style>