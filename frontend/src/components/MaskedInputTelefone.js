import React from 'react'
import InputMask from 'react-input-mask';

const MaskedInputTelefone = ({value, onChange}) => {
    return (  
        <InputMask mask="(99) 99999-9999" 
        placeholder="Digite seu telefone" 
        value={value} 
        onChange={onChange}
        />
    )
}

export default MaskedInputTelefone;
