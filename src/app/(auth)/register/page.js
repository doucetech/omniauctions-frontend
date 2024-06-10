/* eslint-disable prettier/prettier */
'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'

const Page = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [identification, setIdentification] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        register({
            name,
            email,
            address,
            city,
            identification,
            phone,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
        })
    }

    return (
        <form onSubmit={submitForm}>
            {/* Name */}
            <div>
                <Label htmlFor="name">Name</Label>

                <Input
                    id="name"
                    type="text"
                    value={name}
                    className="block mt-1 w-full"
                    onChange={event => setName(event.target.value)}
                    required
                    autoFocus
                />

                <InputError messages={errors.name} className="mt-2" />
            </div>

            <div>
                <Label htmlFor="phone">Phone</Label>

                <Input
                    id="phone"
                    type="number"
                    value={phone}
                    className="block mt-1 w-full"
                    onChange={event => setPhone(event.target.value)}
                    required
                    autoFocus
                    placeholder="263712345678"
                />

                <InputError messages={errors.phone} className="mt-2" />
            </div>

            {/* Email Address */}
            <div className="mt-4">
                <Label htmlFor="email">Email</Label>

                <Input
                    id="email"
                    type="email"
                    value={email}
                    className="block mt-1 w-full"
                    onChange={event => setEmail(event.target.value)}
                    required
                />

                <InputError messages={errors.email} className="mt-2" />
            </div>

            <div>
                <Label htmlFor="identification">ID Number</Label>

                <Input
                    id="identification"
                    type="text"
                    value={identification}
                    className="block mt-1 w-full"
                    onChange={event => setIdentification(event.target.value)}
                    required
                    autoFocus
                    placeholder="00-0000000-A00"
                />

                <InputError messages={errors.identification} className="mt-2" />
            </div>

            <div>
                <Label htmlFor="city">City</Label>

                <Input
                    id="city"
                    type="text"
                    value={city}
                    className="block mt-1 w-full"
                    onChange={event => setCity(event.target.value)}
                    required
                    autoFocus
                    placeholder="Harare"
                />

                <InputError messages={errors.city} className="mt-2" />
            </div>

            <div>
                <Label htmlFor="address">Residential Address</Label>

                <Input
                    id="address"
                    type="text"
                    value={address}
                    className="block mt-1 w-full"
                    onChange={event => setAddress(event.target.value)}
                    required
                    autoFocus
                />

                <InputError messages={errors.address} className="mt-2" />
            </div>

            {/* Password */}
            <div className="mt-4">
                <Label htmlFor="password">Password</Label>

                <Input
                    id="password"
                    type="password"
                    value={password}
                    className="block mt-1 w-full"
                    onChange={event => setPassword(event.target.value)}
                    required
                    autoComplete="new-password"
                />

                <InputError messages={errors.password} className="mt-2" />
            </div>

            {/* Confirm Password */}
            <div className="mt-4">
                <Label htmlFor="passwordConfirmation">Confirm Password</Label>

                <Input
                    id="passwordConfirmation"
                    type="password"
                    value={passwordConfirmation}
                    className="block mt-1 w-full"
                    onChange={event =>
                        setPasswordConfirmation(event.target.value)
                    }
                    required
                />

                <InputError
                    messages={errors.password_confirmation}
                    className="mt-2"
                />
            </div>

            <div className="flex items-center justify-end mt-4">
                <Link
                    href="/login"
                    className="underline text-sm text-gray-600 hover:text-gray-900">
                    Already registered?
                </Link>

                <Button className="ml-4">Register</Button>
            </div>
        </form>
    )
}

export default Page
