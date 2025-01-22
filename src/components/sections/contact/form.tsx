'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { RiLoaderFill } from "react-icons/ri";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea'; // Importando o componente Textarea
import { useToast } from '@/hooks/use-toast';

export const loginFormSchema = z.object({
  name: z.string().min(1, 'O seu nome é obrigatório.'),
  email: z.string().min(1, 'O email é obrigatório.').email('O email deve ser válido.'),
  service: z.enum(['Software Personalizado', 'Desenvolvimento de APIs', 'Desenvolvimento de Landing Pages', 'Produtos SaaS', 'UX/UI Design e Prototipação', 'Desenvolvimento de Sites Institucionais']),
  message: z.string().min(1, 'A mensagem é obrigatória.').optional()
});

export default function ContactForm() {
  const { toast } = useToast()
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      name: '',
      service: 'Desenvolvimento de Landing Pages',
      message: ''
    },
  });

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast({
          title: "Enviado",
          description: "Email enviado com sucesso.",
        })
        form.reset(); 
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Erro ao enviar e-mail.');
      }
    } catch (error) {
      console.error('Erro no envio:', error);
      setError('Ocorreu um erro inesperado. Tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
    }
  }


  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 items-center justify-center gap-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <div className="relative rounded-lg bg-gradient-to-r from-blue  to-pink p-[2px]">
                  <div className="bg-black rounded-lg p-0.5">
                    <Input placeholder="Digite seu nome" {...field} className="bg-transparent w-full" />
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <div className="relative rounded-lg bg-gradient-to-r from-blue  to-pink p-[2px]">
                  <div className="bg-black rounded-lg p-0.5">
                    <Input placeholder="Digite seu email" {...field} className="bg-transparent w-full" />
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem className='col-span-2'>
              <FormLabel>Serviço</FormLabel>
              <FormControl>
                <div className="relative rounded-lg bg-gradient-to-r from-blue  to-pink p-[2px]">
                  <div className="bg-black rounded-lg p-0.5">
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="bg-transparent w-full">
                        <SelectValue placeholder="Selecione um serviço" />
                      </SelectTrigger>
                      <SelectContent className="bg-black col-span-2 text-white border-none">
                        <SelectItem value="Software Personalizado">Software Personalizado</SelectItem>
                        <SelectItem value="Desenvolvimento de APIs">Desenvolvimento de APIs</SelectItem>
                        <SelectItem value="Desenvolvimento de Landing Pages">Desenvolvimento de Landing Pages</SelectItem>
                        <SelectItem value="Produtos SaaS">Produtos SaaS</SelectItem>
                        <SelectItem value="UX/UI Design e Prototipação">UX/UI Design e Prototipação</SelectItem>
                        <SelectItem value="Desenvolvimento de Sites Institucionais">Desenvolvimento de Sites Institucionais</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className='col-span-2'>
              <FormLabel>Mensagem</FormLabel>
              <FormControl>
                <div className="relative rounded-lg bg-gradient-to-r from-blue  to-pink p-[2px]">
                  <div className="bg-black rounded-lg p-0.5">
                    <Textarea placeholder="Digite sua mensagem" {...field} className="bg-transparent w-full h-32" />
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {error && <p className="text-red text-sm">{error}</p>}

        <div className='col-span-2'>
          <Button type="submit" className='bg-gradient-to-r from-pink to-blue'>
            {isLoading ? <RiLoaderFill className="animate-spin" /> : 'Enviar'}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
