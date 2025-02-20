<template>
    <div v-if="editMode">
        {{ label }}
        
        <v-text-field
            v-bind="attrs"
            v-model="filteredDate"
            prepend-icon="mdi-calendar"
            readonly
            @click="openCalendar"
        ></v-text-field>
        <v-col>
            <DatePicker v-if="calendarMode" v-model="date" style=" margin-top: 10px; margin-left: 40px;"/>
            <v-btn v-if="calendarMode" @click="closeCalendar" style="position: relative; z-index: 1; bottom: 4px; right: 12.5%; vertical-align: bottom;" variant="text" color="black">완료</v-btn>
        </v-col>
    </div>
    <div v-else>
        {{ label }} : {{ formattedDate }}
    </div>

</template>

<script> 
import { Calendar, DatePicker } from 'v-calendar';

export default {
    name: 'Date',
    components:{
        Calendar,
        DatePicker,
    },
    props: {
        modelValue: Object,
        editMode: Boolean,
        label: String,
    },
    data: () => ({
        date: new Date(),
        formattedDate: null,
        calendarMode: false,
    }),
    created() {
        this.date = this.modelValue
        if(!this.date) {
            this.date = new Date()
        }
    },
    computed:{
        filteredDate(){
            if(this.date){
                this.formattedDate = new Date(this.date).toISOString().substr(0, 10);
                return this.formattedDate;            
            }
            return null;
        }
    },
    mounted() {
    },
    watch: {
        formattedDate: {
            handler() {
                this.change();
            },
        },
    },
    methods:{
        change(){
            this.$emit("update:modelValue", this.formattedDate);
        },
        setDate(date){
            this.$refs.menu.save(date)
            this.$emit("update:modelValue", date);
        },
        openCalendar(){
            this.calendarMode = true
        },
        closeCalendar(){
            this.calendarMode = false;
        }
    }
}
</script>