Vue.createApp({
    data () {
        return {
            title: 'Введите текст заметки:',
            inputValue: '',
            inputPlaceholder: 'Поле ввода',
            notes: [],
            warning: 'Сократите заметку!'
        }
    },

    methods: {
        addNote() {
            if (this.inputValue.length > 50) return;
                
            this.notes.push(this.inputValue);
            this.inputValue = '';
            
        },

        deleteNote() {
            this.notes.splice(this.index, 1);
        },

        toUpperCase(item) {
            return item.slice(0, 1).toUpperCase() + item.slice(1, item.length);
        },

        pressEnter(event) {
            if (event.key == 'Enter'){
                this.addNote();
            }
        },
    },

    computed: {
        
    },

}).mount('#app')