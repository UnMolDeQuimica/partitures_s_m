import { ITimingSource } from "../Common/Interfaces/ITimingSource";
import { IMessageViewer } from "../Common/Interfaces/IMessageViewer";
import { IAudioPlayer } from "../Common/Interfaces/IAudioPlayer";
import { MusicPartManager, MusicPartManagerIterator } from "../MusicalScore/MusicParts";
import { Dictionary } from "typescript-collections";
import { VoiceEntry, MidiInstrument } from "../MusicalScore/VoiceData";
import { Fraction } from "../Common/DataObjects";
import { Instrument } from "../MusicalScore";
import { PlaybackNote } from "../MusicalScore/Playback/PlaybackNote";
import { IAudioMetronomePlayer } from "../Common/Interfaces/IAudioMetronomePlayer";
import { ISettableInstrument } from "../Common/Interfaces/ISettableInstrument";
import { PlaybackState } from "../Common/Enums/PsEnums";
import { IPlaybackListener } from "../Common/Interfaces/IPlaybackListener";
import { IPlaybackParametersListener } from "../Common/Interfaces/IPlaybackParametersListener";
export declare class ChannelNote {
    note: PlaybackNote;
    key: number;
    channel: number;
    constructor(k: number, c: number, n?: PlaybackNote);
}
export declare class PlaybackManager implements IPlaybackParametersListener {
    protected timingSource: ITimingSource;
    protected resetRequested: boolean;
    protected loopTriggeredReset: boolean;
    protected tempoUserFactor: number;
    protected currentBPM: number;
    protected overrideBPM: number;
    protected listeners: IPlaybackListener[];
    addListener(listener: IPlaybackListener): void;
    removeListener(listenerToRemove: IPlaybackListener): void;
    private readonly percussionChannel;
    private readonly metronomeChannel;
    private messageViewer;
    private audioMetronomePlayer;
    private audioPlayer;
    private musicPartManager;
    private cursorIterator;
    get CursorIterator(): MusicPartManagerIterator;
    private playbackIterator;
    private instrumentToStaffToMidiChannelDict;
    private instrumentIdMapping;
    get InstrumentIdMapping(): Dictionary<number, Instrument>;
    private freeMidiChannels;
    private notesToStop;
    private metronomeNote;
    private metronomeNoteFirstBeat;
    private currentMeasure;
    private currentTimestamp;
    private closestNextTimestamp;
    private currentMetronomeBaseTimestamp;
    private currentBeatDuration;
    private currentIteratorSourceTimeStamp;
    private beatCounter;
    protected runningState: PlaybackState;
    private isRunning;
    private isInitialized;
    private nextIteratorTimestamp;
    private playNextMetronomeAt;
    private isPlaying;
    private metronome;
    private metronomeSoundPlayed;
    /** Whether a dummy sound was played to initialize the audio context / enable sound (on iOS). */
    DummySoundPlayed: boolean;
    StopAtUnrenderedMeasures: boolean;
    private tempoImpactFactor;
    private sheetStartBPM;
    private currentReferenceBPM;
    private readonly defaultVolume;
    private currentVolume;
    private dynamicImpactFactor;
    private scorePositionChangedData;
    private tooManyInstruments;
    private currentRepetition;
    private currentMeasureIndex;
    private metronomeOnlyBPM;
    private readonly highlightPlayedNotes;
    private startRhythmBeats;
    private startRhythmDenominator;
    private isPreCounting;
    MoveCursorDuringPrecount: boolean;
    private fermataActive;
    private doPreCount;
    IgnoreFixedInstrumentKeysForPercussion: boolean;
    constructor(timingSource: ITimingSource, audioMetronomePlayer: IAudioMetronomePlayer, audioPlayer: IAudioPlayer<any>, messageViewer: IMessageViewer);
    get RunningState(): PlaybackState;
    set RunningState(value: PlaybackState);
    DoPlayback: boolean;
    /** Do the initial pre-count */
    get DoPreCount(): boolean;
    set DoPreCount(value: boolean);
    PreCountMeasures: number;
    PreCountBeats: number;
    get Metronome(): ISettableInstrument;
    get MetronomeOnlyBPM(): number;
    set MetronomeOnlyBPM(value: number);
    get OriginalBpm(): number;
    /** will be activated when any solo flag of an Instrument, Voice or Staff is set to true. */
    SoloActive: boolean;
    SoloAttenuationValue: number;
    /** Play dummy sound to initialize audio context (e.g. on user click for iOS) */
    playDummySound(): void;
    playVoiceEntry(voiceEntry: VoiceEntry): void;
    initialize(musicPartMng: MusicPartManager): void;
    play(): Promise<void>;
    pause(): Promise<void>;
    /** Effectively resets the playback to osmd.Sheet.SelectionStart.
     *  If you want to reset to the start of the sheet,
     *    call osmd.Sheet.SelectionStart = osmd.Sheet.sourceMeasures[0].AbsoluteTimestamp beforehand.
     */
    reset(): void;
    /** Starts play() from a time in milliseconds.*/
    playFromMs(timeInMs: number): Promise<void>;
    getTimestampFromMs(timeInMs: number): Fraction;
    /** Sets the cursor and MusicSheet.SelectionStart to the target timestamp (fraction),
     *  but does not start playback if it was not started already.
     *  To get the timestamp from milliseconds, use getTimestampFromMs().
     *  To reset the playback start to the beginning of the sheet, call the function without arguments.
     */
    setPlaybackStart(timestamp?: Fraction): void;
    Dispose(): void;
    setSound(instrumentId: number, newSoundId: MidiInstrument): boolean;
    protected setBpm(bpm: number): void;
    handlePlaybackEvent(): void;
    private NotesPlaybackEventOccurred;
    calculateFinalVolume(volume: number): number;
    /** Main playback loop. Not a sheet music loop, but checks for new notes to be played. */
    private loop;
    private stopAllCurrentlyPlayingNotes;
    protected doReset(shallPrecount: boolean, preCountMeasures?: number): void;
    private calculateClosestNextTimestamp;
    protected handleEndReached(): void;
    private updateScoreCursorPosition;
    private stopMetronomeSound;
    private playMetronomeSound;
    private stopFinishedNotes;
    private processTempoInstructions;
    private handleFermata;
    bpmChanged(newBpm: number, sheetOverride: boolean): void;
    volumeChanged(instrument: number, newVolume: number): void;
    volumeMute(instrument: number): void;
    volumeUnmute(instrument: number): void;
    private changeTempo;
    protected setTempo(): void;
    protected getCurrentReferenceBPM(): number;
    checkForSoloDeactivated(): void;
    /** Returns the duration of the piece in ms (by each measure's bpm, without repeats).
     *  The result may be inaccurate if you haven't set the bpm to the first measure's bpm before playback (or the other way round).
     *  In that case, getSheetDurationInMsEvenBpm() can be more accurate (previous version of this method)
     */
    getSheetDurationInMs(withRepeats?: boolean): number;
    getSheetDurationInMsWithRepeats(): number;
    /** Returns the sheet duration of the piece in ms given the tempo set via setBpm() doesn't change. */
    getSheetDurationInMsEvenBpm(): number;
}
