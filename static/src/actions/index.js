import makeActionCreator from './makeActionCreator';
import { DISPLAY_MESSAGE, UPDATE_METRONOME_STATUS, SET_TEMPO,
  STARTSTOP_METRONOME, ADD_PATH, SET_PATH_SYNC, STARTSTOP_PATH,
  SET_PATH_CURRENTLY_PLAYING, SELECT_PATH, DELETE_SOUND_FROM_PATH,
  ADD_SOUND_TO_PATH, CLEAR_ALL_PATHS, SET_PATH_WAIT_UNTL_FINISHED } from './actionTypes';

export const displaySystemMessage = makeActionCreator(DISPLAY_MESSAGE,
  'message', 'status');

export const updateMetronomeStatus = makeActionCreator(UPDATE_METRONOME_STATUS,
  'bar', 'beat', 'tick');

export const setTempo = makeActionCreator(SET_TEMPO,
  'tempo');

export const startStopMetronome = makeActionCreator(STARTSTOP_METRONOME,
  'isPlaying');

export const addPath = makeActionCreator(ADD_PATH,
  'sounds');

export const setPathSync = makeActionCreator(SET_PATH_SYNC,
  'pathId', 'syncMode');

export const startStopPath = makeActionCreator(STARTSTOP_PATH,
  'pathId', 'isPlaying');

export const setPathCurrentlyPlaying = makeActionCreator(SET_PATH_CURRENTLY_PLAYING,
  'pathId', 'soundIdx', 'willFinishAt');

export const selectPath = makeActionCreator(SELECT_PATH,
  'pathId');

export const deleteSoundFromPath = makeActionCreator(DELETE_SOUND_FROM_PATH,
  'pathSoundIdx', 'pathId');

export const addSoundToPath = makeActionCreator(ADD_SOUND_TO_PATH,
  'sound', 'pathId');

export const clearAllPaths = makeActionCreator(CLEAR_ALL_PATHS);

export const setPathWaitUntilFinished = makeActionCreator(SET_PATH_WAIT_UNTL_FINISHED,
  'pathId', 'waitUntilFinished');