
import { writable } from 'svelte/store';
let STATE = [{
        name: "Navigation",
        visible: true,  
    }
];
function stateStore() {
	const { subscribe, set, update } = writable(STATE);
	return {
        subscribe,
        x: function (state, name) {
            let index = STATE.findIndex(state => state.name == name);
            let tempStates = [...STATE];
            
            // console.log(index);
            

            tempStates[index] = {...tempStates[index], visible: state};
            set(tempStates);
            
        },
		add: (state) => update(states => [...states, state]),
		set: (states) => set(states)
	};
}
let State = stateStore();
export default State