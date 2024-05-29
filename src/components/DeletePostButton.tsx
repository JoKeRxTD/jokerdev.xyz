"use client";

import { useState } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { deletePost, findPostByUser } from "@/src/actions/actions";
import { cn } from "@/src/utils/cn";
import { useRef } from "react";
import { useToast } from "@/src/components/ui/use-toast"
import { BinIcon } from "./Icons";
import { Button } from "@/src/components/ui/button";
import { ImSpinner2 } from "react-icons/im";
import * as React from "react";
import { useSession } from "next-auth/react"
import { SignIn, SignOut } from "@/src/components/SignInOut"

export default function DeletePostButton({ id, className }: { id: string, className: string }) {
    const { data: session } = useSession()
    const { toast } = useToast()
    const [isPending, setIsPending] = useState(false);
    const router = useRouter();

    if (!session) {
        return null;
    }

    async function checkUser(username: string) {
        const checkUser = await findPostByUser(username);
        if (checkUser.length > 0) {
            return true;
        } else {
            return false;
        }
    }
    
    async function onSubmit() {
        setIsPending(true);
        const username = session?.user?.name!;
        const checkUsers = await checkUser(username || '');
        if (checkUsers) {
            try {
                await deletePost(parseInt(id));
                toast({
                    title: 'Success',
                    description: 'Post deleted successfully',
                    variant: "success",
                });
            } catch (error) {
                console.error(error);
                toast({
                    title: 'Error',
                    description: 'An error occurred while deleting the post',
                    variant: "destructive",
                });
            }
        } else {
            toast({
                title: 'Error',
                description: 'You are not authorized to delete this post',
                variant: "destructive",
            });
        }
        setIsPending(false);
    }

    // return button if post belongs to user
    return (
        <div className="flex flex-row items-center justify-center">
            <Button
                size="sm"
                variant="destructive"
                onClick={onSubmit}
                className="flex items-center justify-center p-4 h-5 w-20"
            >
                {isPending ? <ImSpinner2 className="animate-spin" /> : <BinIcon height={18} width={18} />}
            </Button>
        </div>
    );
}