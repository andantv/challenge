import { atom, selector } from 'recoil';
const countState = atom({
    key: 'count',
    default: 0,
});
const incrementCount = selector({
    key: 'incrementCount',
    set: ({ set }, newValue) => set(countState, newValue),
    get: ({ get }) => ((get(countState))),
});
export { countState, incrementCount };