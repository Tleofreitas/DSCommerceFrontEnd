import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../../components/FormImput";
import * as authService from '../../../services/auth-service';
import { ContextToken } from "../../../utils/context-token";
import * as forms from '../../../utils/forms';
import './styles.css';

export default function Login() {

    const { setContextTokenPayload } = useContext(ContextToken);
    const [submitResponseFail, setSubmitResponseFail] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState<any>({
        username: {
            value: "",
            id: "username",
            name: "username",
            type: "text",
            placeholder: "Email",
            validation: function (value: string) {
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.toLowerCase());
            },
            message: "Favor informar um email válido",
        },
        password: {
            value: "",
            id: "password",
            name: "password",
            type: "password",
            placeholder: "Senha",
        }
    });

    function handleSubmit(event: any) {
        event.preventDefault();

        setSubmitResponseFail(false);
        const formDataValidated = forms.dirtyAndValidateAll(formData);
        if (forms.hasAnyInvalid(formDataValidated)) {
            setFormData(formDataValidated);
            return;
        }

        authService.loginRequest(forms.toValues(formData))
            .then(response => {
                authService.saveAccessToken(response.data.access_token);
                //console.log(response.data);
                setContextTokenPayload(authService.getAccessTokenPayload());
                navigate("/cart");
            }).catch(() => {
                setSubmitResponseFail(true)
            });
    }

    function handleImputChange(event: any) {
        const value = event?.target.value;
        const name = event?.target.name;
        setFormData(forms.updateAndValidate(formData, name, value));
    }

    function handleInputTurnDirty(name: string) {
        setFormData(forms.dirtyAndValidate(formData, name));
    }

    return (
        <main>
            <section id="login-section" className="dsc-container">
                <div className="dsc-login-form-container">
                    <form className="dsc-card dsc-form" onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <div className="dsc-form-controls-container">
                            <div>
                                <FormInput
                                    {...formData.username}
                                    className="dsc-form-control"
                                    onTurnDirty={handleInputTurnDirty}
                                    onChange={handleImputChange}
                                />
                                <div className="dsc-form-error">
                                    {formData.username.message}
                                </div>
                            </div>
                            <div>
                                <FormInput
                                    {...formData.password}
                                    className="dsc-form-control"
                                    onTurnDirty={handleInputTurnDirty}
                                    onChange={handleImputChange}
                                />
                            </div>
                        </div>
                        {
                            submitResponseFail &&
                            <div className='dsc-form-global-error'>
                                Usuario ou senha inválidos!
                            </div>
                        }
                        <div className="dsc-login-form-buttons dsc-mt20">
                            <button type="submit" className="dsc-btn dsc-btn-blue">Entrar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}