import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

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
        firstName: z
            .string()
            .min(1, { message: 'Name must be at least 1 characters long' }),
        lastName: z
            .string()
            .min(1, { message: 'Name must be at least 1 characters long' }),
    })

export default function RegistrationForm1() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: '',
            lastName: ''
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
            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="flex flex-row text-2xl">Registration <p className='pl-[10px] text-[16px]'>(1 / 2)</p></CardTitle>
                    <CardDescription>
                        Enter your first and last names, then proceed.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}  className="space-y-8">
                            <div className="grid gap-4">

                                {/* First Name Field */}
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem className="grid gap-2">
                                            <FormLabel htmlFor="firstName">First Name</FormLabel>
                                            <FormControl>
                                                <Input 
                                                    id="firstName" 
                                                    placeholder="John" 
                                                    autoComplete="off"
                                                    {...field} 
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Last Name Field */}
                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem className="grid gap-2">
                                            <FormLabel htmlFor="lastName">Last Name</FormLabel>
                                            <FormControl>
                                                <Input 
                                                    id="lastName" 
                                                    placeholder="Doe"
                                                    autoComplete="off"
                                                    {...field} 
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Proceed Button */}
                                <Button type="submit" className="w-full">
                                    Proceed
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
