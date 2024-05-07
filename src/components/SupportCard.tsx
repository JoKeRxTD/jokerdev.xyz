import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, ButtonGroup } from "@nextui-org/react";
import { Code } from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import { SiDiscord, SiEgghead } from "react-icons/si";
import { Tooltip } from "@nextui-org/react";


export default function SupportCard() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <div className="flex flex-col flex-wrap justify-center items-center gap-1 p-1">
            <div className="flex flex-row flex-wrap justify-center items-center gap-1 p-1 text-[#fafafa] dark:text-[#fafafa]">
                <Button onPress={onOpen} className="border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-zinc-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
                    Click Me 😉
                </Button>
            </div>
            <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} className="border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-zinc-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="text-2xl text-bold text-center items-center justify-center text-primary-300">Support Me</ModalHeader>
                            <ModalBody>
                                <p className="text-center text-gray-500 dark:text-gray-400">
                                    Oh You Clicked the Special Button, This project is free to use and open source, but if you would like to support me you can do so by clicking the button below.
                                </p>
                                <Button
                                    onPress={onClose}
                                    target="_blank"
                                    href="https://www.google.com"
                                    variant="flat"
                                    className="text-white/50 border rounded-xl border-zinc-800 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-zinc-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
                                    Support Me
                                </Button>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={onClose} className="text-gray-800 dark:text-gray-100 border rounded-xl border-[#3c64949f] bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-[#2e4c70b6] dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
                                    Close
                                </Button>
                                <Tooltip className="flex flex-col items-center text-center p-2 space-y-2 justify-center"
                                    content={
                                        <div className="flex flex-col items-center text-center p-2 space-y-2 justify-center border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
                                            <p className="text-sm font-bold text-green-600 dark:text-green-800">Zap-Hosting</p>
                                            <p className="text-sm font-normal text-green-600 dark:text-green-800">You found an easter egg!</p>
                                            <p className="text-sm font-normal text-green-600 dark:text-green-800">Use code&nbsp;
                                                <Link isExternal href="https://zap-hosting.com/joker">
                                                    <Code color="success">eqsource-10</Code>
                                                </Link>
                                                &nbsp;for 20% off!</p>
                                        </div>
                                    }>
                                    <p className="sm:w-1vh sm:items-center sm:text-center sm:justify-center p-2 text-md lg:text-lg text-green-600 dark:text-green-800 border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200">
                                        <SiEgghead />
                                    </p>
                                </Tooltip>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}