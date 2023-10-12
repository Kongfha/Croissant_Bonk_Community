/**
 * @typedef {Object} Item
 * @property {string} _id
 * @property {string} item
 * @property {string} name
 * @property {number} price
 */

/** @typedef {Omit<Item, "_id">} ItemPayload */

export const BACKEND_URL = "http://54.81.52.230:3222";


export let BONK_CNT = 0;
export let beforeBonk = -1;
export let beforeSize = 0;

export function updatebeforeSize(size){
  beforeSize = size;
}

export function updateBeforeBonk(){
  beforeBonk = parseInt(BONK_CNT);
}

export function ResetBonk(){
  BONK_CNT = 0;
}

export function AddBONK() {
  BONK_CNT++;
}

export let time_cnt = 0;

export function timeReset(){
  time_cnt = 0;
}

export function timeAdd(){
  time_cnt++;
}