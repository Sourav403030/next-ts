"use client";
import React, { FormEvent, useRef, useState } from 'react'

type formData = {
    name: string;
    email: string;
    age: number | null;
    password: string;
}

const FormTypes = () => {
    const [submittedData, setSubmittedData] = useState<formData>({
        name: '',
        email: '',
        age: null,
        password: ''
    })

    const name = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const age = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        const nameVal = name.current!.value
        const emailVal = email.current!.value
        const ageVal = age.current!.value
        const passwordVal = password.current!.value

        setSubmittedData({
            name: nameVal,
            email: emailVal,
            password: passwordVal,
            age: ageVal ? parseInt(ageVal) : null,
        })
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your Name' ref={name} />
        <input type="email" placeholder='Enter your Email' ref={email} />
        <input type="number" placeholder='Enter your Age' ref={age} />
        <input type="password" placeholder='Enter your Password' ref={password} />
        <button type='submit'>Submit</button>

        <section>
            <h1>Name: {submittedData.name}</h1>
            <h1>Email: {submittedData.email}</h1>
            <h1>Age: {submittedData.age}</h1>
            <h1>Password: {submittedData.password}</h1>
        </section>

    </form>
  )
}

export default FormTypes