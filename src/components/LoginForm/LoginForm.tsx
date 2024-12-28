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
// import { PasswordInput } from '@/components/ui/password-input'

// Improved schema with additional validation rules
const formSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z
        .string()
        .min(6, { message: 'Password must be at least 6 characters long' })
        .regex(/[a-zA-Z0-9]/, { message: 'Password must be alphanumeric' }),
})


const LoginForm = () => {


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
            email: '',
            password: '',
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            // Assuming an async login function
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
        <div className="flex flex-col min-h-[50vh] h-full w-full items-center justify-center px-4">
            <Card className="mx-auto w-[100%] max-w-[350px]">
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your account information to login .
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <div className="grid gap-4">

                                {/* Email */}
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
                                                    autoComplete="email"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Password */}
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem className="grid gap-2">
                                            <div className="flex justify-between items-center">
                                                <FormLabel htmlFor="password">Password</FormLabel>
                                            </div>
                                            <FormControl>
                                                <Input
                                                    id="password"
                                                    type= {passwordInputType}
                                                    placeholder="******"
                                                    autoComplete="current-password"
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

                                {/* Submit Button */}
                                <Button type="submit" className="w-full">
                                    Login
                                </Button>

                            </div>
                        </form>
                    </Form>
                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{' '}
                        <span  className="underline">
                            Sign up
                        </span>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default LoginForm;
