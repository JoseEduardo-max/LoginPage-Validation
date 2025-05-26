import {useForm,} from "react-hook-form";

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Login com:", data); 
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form onSubmit={handleSubmit(onSubmit)} className="p-4 bg-white shadow rounded w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email é obrigatório",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Formato de email inválido",
              },
            })}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Senha</label>
          <input
            type="password"
            {...register("senha", {
              required: "Senha é obrigatória",
              minLength: {
                value: 6,
                message: "Mínimo 6 caracteres",
              },
            })}
            className={`form-control ${errors.senha ? "is-invalid" : ""}`}
          />
          {errors.senha && (
            <div className="invalid-feedback">{errors.senha.message}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Entrar
        </button>
      </form>
    </div>
    );
}