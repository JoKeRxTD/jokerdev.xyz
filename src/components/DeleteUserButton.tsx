"use client";

import { useState } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { deletePost, CheckUserById, deleteUser } from "@/src/actions/actions";
import { cn } from "@/src/utils/cn";
import { useRef } from "react";
import { useToast } from "@/src/components/ui/use-toast"
import { Tooltip } from "@nextui-org/react";
import { BinIcon } from "./Icons";
import { Button } from "@/src/components/ui/button";
import { ImSpinner2 } from "react-icons/im";
import * as React from "react";
import { useSession } from "next-auth/react"
import { SignIn, SignOut } from "@/src/components/SignInOut"

export default function DeleteUserButton({ id, className }: { id: string, className: string }) {
    const { data: session } = useSession()
    const { toast } = useToast()
    const [isPending, setIsPending] = useState(false);
    const router = useRouter();

    if (!session) {
        return null;
    }

    async function checkUserisOwner(userId: string) {
        const checkUser = await CheckUserById(userId);
        if (checkUser) {
            return true;
        } else {
            return false;
        }
    }

    
    async function onSubmit() {
        setIsPending(true);
        const userId = session?.user?.id!;
        const checkUsers = await checkUserisOwner(userId || '');
        if (checkUsers) {
            try {
                await deleteUser(id);
                toast({
                    title: 'Success',
                    description: 'User deleted successfully',
                    variant: "success",
                });
            } catch (error) {
                console.error(error);
                toast({
                    title: 'Error',
                    description: 'An error occurred while deleting the user',
                    variant: "destructive",
                });
            }
        } else {
            toast({
                title: 'Error',
                description: 'You are not authorized to delete this user',
                variant: "destructive",
            });
        }
        setIsPending(false);
    }

    // return button if post belongs to user
    return (
        <div className="flex flex-row items-center justify-center">
            <Tooltip content="Delete user" className="w-20 flex items-center justify-center rounded-md p-4 h-5 w-22 ring-1 ring-inset bg-zinc-900/25 text-zinc-800 ring-zinc-400/25 dark:bg-zinc-900/25 dark:text-zinc-400 dark:ring-zinc-400/25 hover:text-zinc-400 dark:hover:text-zinc-400">
                <Button
                    size="sm"
                    variant="destructive"
                    onClick={onSubmit}
                    className="flex items-center justify-center p-4 h-5 w-20"
                >
                    {isPending ? <ImSpinner2 className="animate-spin" /> : <BinIcon height={18} width={18} />}
                </Button>
            </Tooltip>
        </div>
    );
}