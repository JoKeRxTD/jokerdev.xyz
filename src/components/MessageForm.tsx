import { useState } from 'react';
import axios from 'axios';
import { z } from 'zod';
import { RiSendPlane2Fill } from 'react-icons/ri';
import { ImSpinner2 } from 'react-icons/im';
import { Input, Textarea } from '@nextui-org/react';

// Step 2: Define the schema for form data validation
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

const MessageForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errMsg, setErrMsg] = useState('');
  const [sending, setSending] = useState(false);

  const sendMessage = async () => {
    setSending(true);
    setErrMsg('');

    // Step 3: Validate formData using Zod
    const validationResult = formSchema.safeParse(formData);
    if (!validationResult.success) {
      setErrMsg("Validation failed. Please check your input.");
      setSending(false);
      return;
    }

    try {
      await axios.post('/api/sent', formData);
      setFormData({ name: '', email: '', message: '' });
      setErrMsg('Message sent successfully!');
    } catch (error) {
      setErrMsg('Failed to send message. Please try again later.');
    } finally {
      setSending(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage();
  };

  // Step 4: Update the component's return statement as needed
  // This example assumes no changes are needed in the return statement
  return (
      <div className="md:col-span-2 row-span-3 bg-opacity-50 bg-white dark:bg-slate-800/5 rounded-md p-3 border border-zinc-800/50">

          <p className="text-center">
            Have an inquiry? Feel free to leave a message below.
          </p>
          <h1 className="font-bold text-sm dark:text-slate-500 mb-1">Name / Discord</h1>
          <Input
            placeholder="Tom / JoKeRxTD"
            type="text"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 mb-2 rounded-sm bg-slate-300/50 dark:bg-zinc-900 text-sm placeholder:text-gray-600 dark:placeholder:text-slate-200/20"
          />

          <h1 className="font-bold text-sm dark:text-slate-500 mb-1">Email</h1>
          <Input
            placeholder="example@email.com"
            type="text"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-2 mb-2 rounded-sm bg-slate-300/50 dark:bg-zinc-900 text-sm placeholder:text-gray-600 dark:placeholder:text-slate-200/20"
          />

          <h1 className="font-bold text-sm dark:text-slate-500 mb-1">Message</h1>
          <Textarea
            placeholder="Hi Tom/JoKeR, what's up?"
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full p-2 h-36 mb-1 rounded-sm bg-slate-300/50 dark:bg-zinc-900 text-sm placeholder:text-gray-600 dark:placeholder:text-slate-200/20"
          />

          <div className="w-full flex flex-row justify-between items-center">
            <p className="text-gray-900 dark:text-gray-300 text-sm">{errMsg}</p>

            <button
              onClick={sendMessage}
              className="border border-gray-800 hover:bg-gray-200 dark:border-zinc-600/50 dark:bg-zinc-900/10 dark:hover:bg-zinc-800/20 flex flex-row items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition-colors duration-75"
            >
              <span className="mt-[2px]">Send</span>
              {!sending && <RiSendPlane2Fill className="ml-2" />}
              {sending && <ImSpinner2 className="w-4 h-4 ml-2 animate-spin" />}
            </button>
          </div>
        </div>
  );
};

export default MessageForm;