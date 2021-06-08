import React from 'react';
import InputMask from 'react-input-mask';

const MaskedInputCpf = ({value, onChange}) => {
    return (  
        <InputMask mask="999.999.999-99" 
        placeholder="Digite seu CPF" 
        value={value} 
        onChange={onChange}
        />
    )
}

export default MaskedInputCpf;
