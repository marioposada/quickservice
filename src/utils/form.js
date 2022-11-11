const formatEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const minPasswordLength = 6;

export const validateInput = (name, value) => {
    let hasError = false;
    let error = '';
    switch (name) {
        case 'email':
            if(value?.trim() === '') {
                hasError = true;
                error = `El ${name} es requerido`;
            } else if(!formatEmail.test(value)) {
                hasError = true;
                error = 'El email no es valido';
            } else {
                hasError = false;
                error = '';
            }
            break;
        case 'password':
            if(value?.trim() === '') {
                hasError = true;
                error = `El ${name} es requerido`;
            } else if(value.length < minPasswordLength) {
                hasError = true;
                error = `La contraseña debe tener al menos ${minPasswordLength} caracteres`;
            } else {
                hasError = false;
                error = '';
            }
            break;
        default:
            break;
    }
    return { hasError, error };
}

export const UPDATE_FORM = "UPDATE_FORM";
export const UPDATE_STATUS = "UPDATE_STATUS";
3

export const onInputChange = (name, value, dispatch, formState) => {
    const { hasError, error } = validateInput(name, value);
    let isFormValid = true;

    for (const key in formState) {
        const item = formState[key];

     

        if (key !== name && hasError) {
            isFormValid = false;
            break;
        } else if(key !== name && item.hasError) {
            isFormValid = false;
            break;
        }
    }

    dispatch({
        type: UPDATE_FORM,
        data: {
            name,
            value,
            hasError,
            error,
            touched: false,
            isFormValid
        }
    });
}

export const onFocusOut = (name, value, dispatch, formState) => {
    const { hasError, error } = validateInput(name, value);
    let isFormValid = true;

    for (const key in formState) {
        const item = formState[key];
        if (key !== name && hasError) {
            isFormValid = false;
            break;
        } else if(key !== name && item.hasError) {
            isFormValid = false;
            break;
        }
    }

    dispatch({
        type: UPDATE_FORM,
        data: {
            name,
            value,
            hasError,
            error,
            touched: true,
            isFormValid
        }
    });
}





