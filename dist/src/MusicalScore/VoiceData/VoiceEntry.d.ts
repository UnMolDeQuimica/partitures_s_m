import { Fraction } from "../../Common/DataObjects/Fraction";
import { Voice } from "./Voice";
import { SourceStaffEntry } from "./SourceStaffEntry";
import { Note } from "./Note";
import { LyricsEntry } from "./Lyrics/LyricsEntry";
import { TechnicalInstruction } from "./Instructions/TechnicalInstruction";
import { OrnamentContainer } from "./OrnamentContainer";
import { Dictionary } from "typescript-collections";
import { Arpeggio } from "./Arpeggio";
import { PlaybackEntry } from "../Playback/PlaybackEntry";
import { Articulation } from "./Articulation";
/**
 * A [[VoiceEntry]] contains the notes in a voice at a timestamp.
 */
export declare class VoiceEntry {
    /**
     *
     * @param timestamp The relative timestamp within the source measure.
     * @param parentVoice
     * @param parentSourceStaffEntry
     * @param isGrace States whether the VoiceEntry has (only) grace notes.
     * @param graceNoteSlash States whether the grace note(s) have a slash (Acciaccatura, played before the beat)
     */
    constructor(timestamp: Fraction, parentVoice: Voice, parentSourceStaffEntry: SourceStaffEntry, addToStaffEntry?: boolean, isGrace?: boolean, graceNoteSlash?: boolean, graceSlur?: boolean);
    private parentVoice;
    private parentSourceStaffEntry;
    private timestamp;
    private notes;
    private graceVoiceEntriesBefore;
    private graceVoiceEntriesAfter;
    private isGrace;
    /** States whether the grace notes come after a main note (at end of measure). */
    private graceAfterMainNote;
    private graceNoteSlash;
    private graceSlur;
    private articulations;
    private playbackEntries;
    private fermata;
    private technicalInstructions;
    private lyricsEntries;
    /** The Arpeggio consisting of this VoiceEntry's notes. Undefined if no arpeggio exists. */
    private arpeggio;
    private ornamentContainer;
    private wantedStemDirection;
    /** Stem direction specified in the xml stem element. */
    private stemDirectionXml;
    private stemDirection;
    /** Color of the stem given in XML. RGB Hexadecimal, like #00FF00. */
    private stemColorXml;
    /** Color of the stem currently set. RGB Hexadecimal, like #00FF00. */
    private stemColor;
    private mainPlaybackEntry;
    private volumeModifier;
    private durationModifier;
    get ParentSourceStaffEntry(): SourceStaffEntry;
    get ParentVoice(): Voice;
    get Timestamp(): Fraction;
    set Timestamp(value: Fraction);
    get Notes(): Note[];
    addNote(note: Note): void;
    get GraceVoiceEntriesBefore(): VoiceEntry[];
    set GraceVoiceEntriesBefore(value: VoiceEntry[]);
    get GraceVoiceEntriesAfter(): VoiceEntry[];
    set GraceVoiceEntriesAfter(value: VoiceEntry[]);
    get IsGrace(): boolean;
    set IsGrace(value: boolean);
    get GraceAfterMainNote(): boolean;
    set GraceAfterMainNote(value: boolean);
    get GraceNoteSlash(): boolean;
    set GraceNoteSlash(value: boolean);
    get GraceSlur(): boolean;
    set GraceSlur(value: boolean);
    get Articulations(): Articulation[];
    /** Stores all playback entries (e.g. extra grace and ornament entries).
     * Also holds the main playback entry.
     * The entries are sorted in ascending timestamp.
     */
    get PlaybackEntries(): PlaybackEntry[];
    get Fermata(): Articulation;
    get MainPlaybackEntry(): PlaybackEntry;
    set MainPlaybackEntry(value: PlaybackEntry);
    removeMainPlaybackEntry(): void;
    removePlaybackEntry(value: PlaybackEntry): void;
    set Articulations(value: Articulation[]);
    get TechnicalInstructions(): TechnicalInstruction[];
    get LyricsEntries(): Dictionary<string, LyricsEntry>;
    get Arpeggio(): Arpeggio;
    set Arpeggio(value: Arpeggio);
    get OrnamentContainer(): OrnamentContainer;
    set OrnamentContainer(value: OrnamentContainer);
    set WantedStemDirection(value: StemDirectionType);
    get WantedStemDirection(): StemDirectionType;
    set StemDirectionXml(value: StemDirectionType);
    get StemDirectionXml(): StemDirectionType;
    set StemDirection(value: StemDirectionType);
    get StemDirection(): StemDirectionType;
    get StemColorXml(): string;
    set StemColorXml(value: string);
    get StemColor(): string;
    set StemColor(value: string);
    get VolumeModifier(): Articulation;
    set VolumeModifier(value: Articulation);
    get DurationModifier(): Articulation;
    set DurationModifier(value: Articulation);
    hasArticulation(articulation: Articulation): boolean;
    static isSupportedArticulation(articulation: ArticulationEnum): boolean;
    hasTie(): boolean;
    hasSlur(): boolean;
    isStaccato(): boolean;
    isAccent(): boolean;
    getVerseNumberForLyricEntry(lyricsEntry: LyricsEntry): string;
}
export declare enum ArticulationEnum {
    accent = 0,
    strongaccent = 1,
    softaccent = 2,
    marcatoup = 3,
    marcatodown = 4,
    invertedstrongaccent = 5,
    staccato = 6,
    staccatissimo = 7,
    spiccato = 8,
    tenuto = 9,
    fermata = 10,
    invertedfermata = 11,
    breathmark = 12,
    caesura = 13,
    lefthandpizzicato = 14,
    naturalharmonic = 15,
    snappizzicato = 16,
    upbow = 17,
    downbow = 18,
    scoop = 19,
    plop = 20,
    doit = 21,
    falloff = 22,
    stress = 23,
    unstress = 24,
    detachedlegato = 25,
    otherarticulation = 26,
    bend = 27
}
export declare enum StemDirectionType {
    Undefined = -1,
    Up = 0,
    Down = 1,
    None = 2,
    Double = 3
}
