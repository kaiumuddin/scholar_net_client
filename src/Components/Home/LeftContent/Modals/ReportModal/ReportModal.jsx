import React from 'react';
import { Label, Textarea, Checkbox, Button } from "flowbite-react";
const ReportModal = () => {
    return (
        <>
            {/* <!-- Main modal --> */}
            <div id="ReportModal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
                <div className="relative w-full h-full max-w-2xl md:h-auto">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* <!-- Modal header --> */}
                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                <span>   Report post </span>
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="ReportModal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="p-6 space-y-6">

                            <form className="flex flex-col gap-4">
                           
                                <div id="textarea">
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="Report"
                                            value="Report text"
                                        />
                                    </div>
                                    <Textarea
                                        id="descriptin"
                                        className='px-3 py-3'
                                        placeholder="Leave a report text..."
                                        required={true}
                                        rows={4}
                                    />
                                </div>

                                <div className="flex items-center gap-2">
                                    <Checkbox id="agree" />
                                    <Label htmlFor="agree">
                                        I agree with the this privacy policy
                                    </Label>
                                </div>
                                <Button type="submit">
                                    Report post
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ReportModal;