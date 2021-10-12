console.log('appjs');

const words = [
  { en: 'to make', es: 'hacer', aliases: ['dingo', 'dongo'] },
  {
    en: 'to eat',
    es: 'comer',
    aliases: ['dingo', 'dongo']
  }
];

const Palabra = {
  template: `<h1>{{word.en}}</h1>
             <input @keyup="onChange($event)">
             <h2>{{translation}}</h2>`,
  setup: () => {
    const index = Vue.ref(0);
    const onChange = (e) => {
      console.log(e.target.value);
    };

    return {
      onChange: onChange,
      word: words[index.value]
    };
  }
};

const app = Vue.createApp(Palabra);

app.mount(document.getElementById('app'));
