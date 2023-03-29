import React from 'react'
import  InputText  from '../InputText/InputText';
import Text from '../Text/Text';
import Button from '../Button/Button';

const Forn = (props) => {
  return (
    <form>
        <h5>{props.title}</h5>
        <InputText input = "mail" />
        <InputText input = "numero de telefono"/>
        <Text textarea = "deja un comentario"/>
        <Button label = "enviar"/>

    </form>
  )
}

export default Forn