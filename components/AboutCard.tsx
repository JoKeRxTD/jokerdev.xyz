import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Skills from "@/components/Skills";
import { Code } from "@nextui-org/react";


export default function AboutCard() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <div className="flex flex-col flex-wrap justify-center items-center gap-1 p-1">
            <div className="flex flex-row flex-wrap justify-center items-center gap-1 p-1 text-[#fafafa] dark:text-[#fafafa]">
                <Button onPress={onOpen} className="border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
                   Click Me 😉
                </Button>
            </div>
            <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} className="border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="text-2xl text-bold text-center items-center justify-center text-primary-300">About Me</ModalHeader>
                            <ModalBody>
                                I am 31 years old, Inspired Full Stack Developer from the United Kingdom,
                                I started coding in 2015 my first project was a Discord Bot Built with Discord.JS
                                I am a very friendly person and I love to help people out with their coding problems.
                                I am a very active person and I love to play video games and watch movies in my spare time.
                                <h1 className="text-2xl text-bold text-center items-center justify-center text-primary-300">Skills</h1>
                                <Skills/>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={onClose} className="text-gray-800 dark:text-gray-100 border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}