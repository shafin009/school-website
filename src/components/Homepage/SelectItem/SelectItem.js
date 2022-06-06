import React from 'react';

const SelectItem = () => {
    return (
        <section class="text-gray-600 body-font relative">
            <div class="container px-5 py-10 mx-auto">
                <div class="flex flex-col text-center w-full mb-12">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Search Here</h1>

                </div>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-3">

                    <div class="relative">
                        <label for="name" class="leading-7 text-sm text-gray-600">Division</label>
                        <select class="form-select" id="inputGroupSelect02">
                            <option selected>Division..</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>


                    <div class="relative">
                        <label for="email" class="leading-7 text-sm text-gray-600">District</label>
                        <select class="form-select" id="inputGroupSelect02">
                            <option selected>District..</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>




                    <div class="relative">
                        <label for="name" class="leading-7 text-sm text-gray-600">Sub-District</label>

                        <select class="form-select" id="inputGroupSelect02">
                            <option selected>Sub-District..</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>


                    <div class="relative">
                        <label for="email" class="leading-7 text-sm text-gray-600">School / College</label>
                        <select class="form-select" id="inputGroupSelect02">
                            <option selected>School / College..</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SelectItem;