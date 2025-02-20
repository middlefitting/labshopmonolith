<template>
    <div>
        <String label="ProductId" v-model="value.productId" :editMode="editMode"/>
        <Number label="Qty" v-model="value.qty" :editMode="editMode"/>
        <String label="CustomerId" v-model="value.customerId" :editMode="editMode"/>
        <Number label="Amount" v-model="value.amount" :editMode="editMode"/>

        <v-divider class="border-opacity-100 my-divider"></v-divider>
        <v-layout row justify-end>
            <v-btn
                width="64px"
                color="primary"
                @click="save"
            >
                저장
            </v-btn>
        </v-layout>
    </div>
</template>


<script>

import BaseEntity from './base-ui/BaseEntity.vue'

export default {
    name: 'Order',
    mixins:[BaseEntity],
    components:{
    },
    
    data: () => ({
        path: "orders"
    }),
    created(){
    },
    computed:{
    },
    methods: {
    },
}
</script>
