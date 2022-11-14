class Message{
    constructor(author, text){
        this.text= text;
        this.author = author;
        this.time = new Date()
    }
    toString(){
        return `${this.time.getHours()}:${this.time.getMinutes()} ${this.author}: ${this.text}`
    }
} 

class Messenger{
    constructor(){
        this.messageArray = [];
    }
    show_history(){
        this.messageArray.forEach(item=>{
            console.log(item)}
    )};
    send(author,text){
        let message = new Message(author,text);
        this.messageArray.push(message.toString());
    }
};


let messenger = new Messenger()
messenger.send('Alien', 'Hello, World! I am alien')
messenger.send('World', 'wHaT??? aLiEn??? Get away from mee')
messenger.send('Alien', 'But... but I want to be friend of you')
messenger.send('World', "kiştt Git Bash'imdan")
messenger.show_history()