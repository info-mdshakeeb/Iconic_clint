import React, { useState } from 'react';
import AddressAddModal from '../../Components/Modal/AddressAddModal';
import PrimaryButton from '../../Components/share/Buttons/PrimaryButton';
import SecondaryButton from '../../Components/share/Buttons/SecondaryButton';
import BodyTemplate from '../../Components/share/Template/BodyTemplate';

const Address = () => {
    const [closeModal, setCloseModal] = useState(false)
    return (
        <BodyTemplate py={4}>
            <div className="max-w-2xl py-4 m-auto">
                <div className="mb-5">
                    <div className="flex justify-between items-center h-9  ">
                        <p className='font-bold text-xl'>Delivary Address</p>
                        <PrimaryButton
                            h={9}
                        >
                            <label htmlFor="Add_Address"
                                onClick={() => setCloseModal(true)}
                                className='cursor-pointer'> Add Address</label>
                        </PrimaryButton>
                    </div>
                </div>
                <div className="flex justify-between p-4 text-white rounded shadow mb-4 bg-black">
                    <div className="">
                        <p>name</p>
                        <p>Phone number</p>
                        <p>Address</p>
                    </div>
                    <div className="flex items-start gap-4">
                        <div ><SecondaryButton>
                            <div className="h-4"> Edit</div>
                        </SecondaryButton></div>
                    </div>
                </div>
            </div>
            {closeModal &&
                <AddressAddModal
                    setCloseModal={setCloseModal}
                />}
        </BodyTemplate>
    );
};

export default Address;