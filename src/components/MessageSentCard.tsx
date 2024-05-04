import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function SentCard() {
    const { isOpen, onOpenChange } = useDisclosure();
    return (
        <div className="flex flex-col flex-wrap justify-center items-center gap-1 p-1">
            <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} className="border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-zinc-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="text-2xl text-bold text-center items-center justify-center text-primary-300">Message Sent</ModalHeader>
                            <ModalBody>
                                <p className="text-center text-gray-500 dark:text-gray-400">
                                Your message has been sent successfully. I will get back to you as soon as possible.
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
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}