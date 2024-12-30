import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { useState } from 'react'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'

// Define validation schema using Zod
const formSchema = z
    .object({
        userName: z
            .string()
            .min(5, { message: 'Name must be at least 5 characters long' }),
        email: z.string().email({ message: 'Invalid email address' }),
        password: z
            .string()
            .min(6, { message: 'Password must be at least 6 characters long' })
            .regex(/[a-zA-Z0-9]/, { message: 'Password must be alphanumeric' }),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ['confirmPassword'],
        message: 'Passwords do not match',
    })

export default function RegistrationForm2() {


    // toggle password
    const [passwordInputType, setPasswordInputType] = useState('password')
    const togglePassword = () =>{
        if(passwordInputType === 'password'){
            setPasswordInputType('text')
        }else{
            setPasswordInputType('password')
        }
    }


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            // Assuming an async registration function
            console.log(values)
            toast(
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(values, null, 2)}</code>
                </pre>,
            )
        } catch (error) {
            console.error('Form submission error', error)
            toast.error('Failed to submit the form. Please try again.')
        }
    }

    return (
        <div className="flex min-h-[60vh] h-full w-full items-center justify-center px-4">
            <Card className="mx-auto w-[100%] max-w-[350px]">
                <CardHeader>
                    <CardTitle className="flex flex-row text-2xl">Registration <p className='pl-[10px] text-[16px]'> (2 / 2)</p></CardTitle>
                    <CardDescription>
                        Complete registration by filling out the form below.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <div className="grid gap-4">
                                {/* Username Field */}
                                <FormField
                                    control={form.control}
                                    name="userName"
                                    render={({ field }) => (
                                        <FormItem className="grid gap-2">
                                            <FormLabel htmlFor="userName">Username</FormLabel>
                                            <FormControl>
                                                <Input 
                                                    id="userName" 
                                                    placeholder="JD123" 
                                                    autoComplete="off"
                                                    {...field} 
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Email Field */}
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="grid gap-2">
                                            <FormLabel htmlFor="email">Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    id="email"
                                                    placeholder="johndoe@mail.com"
                                                    type="email"
                                                    autoComplete="off"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />


                                {/* Password Field */}
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem className="grid gap-2">
                                            <FormLabel htmlFor="password">Password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    id="password"
                                                    placeholder="******"
                                                    type= {passwordInputType}
                                                    autoComplete="new-password"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Confirm Password Field */}
                                <FormField
                                    control={form.control}
                                    name="confirmPassword"
                                    render={({ field }) => (
                                        <FormItem className="grid gap-2">
                                            <FormLabel htmlFor="confirmPassword">
                                                Confirm Password
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    id="confirmPassword"
                                                    placeholder="******"
                                                    type={passwordInputType}
                                                    autoComplete="new-password"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Password Toggle */}
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        onClick={togglePassword}
                                        className="mr-2"
                                    />
                                    <label className="text-[14px]">
                                        Show Password
                                    </label>
                                </div>

                                <Button type='button' className="w-full bg-gray-800">
                                    Back
                                </Button>
                                <Button 
                                    type="submit"
                                    disabled={form.formState.isSubmitting} // Optionally disable during submission 
                                    className="w-full bg-red-600 hover:bg-red-600 transform transition ease-out duration-200 hover:scale-105"
                                >
                                    Register
                                </Button>
                                
                            </div>
                        </form>
                    </Form>
                    <div className="mt-4 text-center text-sm">
                        Already have an account?{' '}
                        <span  className="underline">
                            Login
                        </span>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
