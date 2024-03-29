export declare enum NoteEnum {
    C = 0,
    D = 2,
    E = 4,
    F = 5,
    G = 7,
    A = 9,
    B = 11
}
/** Describes Accidental types.
 * Do not use the number values of these enum members directly for calculation anymore.
 * To use these for pitch calculation, use pitch.AccidentalHalfTones()
 * or Pitch.HalfTonesFromAccidental(accidentalEnum).
 */
export declare enum AccidentalEnum {
    SHARP = 0,
    FLAT = 1,
    NONE = 2,
    NATURAL = 3,
    DOUBLESHARP = 4,
    DOUBLEFLAT = 5,
    TRIPLESHARP = 6,
    TRIPLEFLAT = 7,
    QUARTERTONESHARP = 8,
    QUARTERTONEFLAT = 9,
    SLASHFLAT = 10,
    THREEQUARTERSSHARP = 11,
    THREEQUARTERSFLAT = 12,
    SLASHQUARTERSHARP = 13,
    SLASHSHARP = 14,
    DOUBLESLASHFLAT = 15,
    SORI = 16,
    KORON = 17
}
export declare class Pitch {
    static pitchEnumValues: NoteEnum[];
    private static halftoneFactor;
    private static octXmlDiff;
    private octave;
    private fundamentalNote;
    private accidental;
    private accidentalXml;
    private frequency;
    private halfTone;
    static getNoteEnumString(note: NoteEnum): string;
    /** Changes a note x lines/steps up (+) or down (-) from a NoteEnum on a staffline/keyboard (white keys).
     * E.g. Two lines down (-2) from a D is a B.
     * Two lines up from an A is a C.
     *   (e.g. in the treble/violin clef, going one line up: E -> F (semitone), F -> G (2 semitones)).
     * Returns new NoteEnum and the octave shift (e.g. -1 = new octave is one octave down). */
    static lineShiftFromNoteEnum(noteEnum: NoteEnum, lines: number): [NoteEnum, number];
    /**
     * @param the input pitch
     * @param the number of halftones to transpose with
     * @returns ret[0] = the transposed fundamental.
     * ret[1] = the octave shift (not the new octave!)
     * @constructor
     */
    static CalculateTransposedHalfTone(pitch: Pitch, transpose: number): {
        halftone: number;
        overflow: number;
    };
    /** Returns the fundamental note x (0 <= x <= 11, e.g. 0 = C) with octave change/overflow.
     * The halftone will be one of the values in the enum NoteEnum, converted to number here as we need numbers for calculation.
     */
    static WrapAroundCheck(value: number, limit: number): {
        halftone: number;
        overflow: number;
    };
    static calcFrequency(obj: Pitch | number): number;
    static calcFractionalKey(frequency: number): number;
    static fromFrequency(frequency: number): Pitch;
    static fromHalftone(halftone: number): Pitch;
    static ceiling(halftone: number): NoteEnum;
    static floor(halftone: number): NoteEnum;
    constructor(fundamentalNote: NoteEnum, octave: number, accidental: AccidentalEnum, accidentalXml?: string, isRest?: boolean);
    /** Turns an AccidentalEnum into half tone steps for pitch calculation.
     *
     */
    static HalfTonesFromAccidental(accidental: AccidentalEnum): number;
    static AccidentalFromHalfTones(halfTones: number): AccidentalEnum;
    /**
     * Converts AccidentalEnum to a string which represents an accidental in VexFlow
     * Can also be useful in other cases, but has to match Vexflow accidental codes.
     * @param accidental
     * @returns {string} Vexflow Accidental code
     */
    static accidentalVexflow(accidental: AccidentalEnum): string;
    get AccidentalHalfTones(): number;
    get Octave(): number;
    get FundamentalNote(): NoteEnum;
    get Accidental(): AccidentalEnum;
    get AccidentalXml(): string;
    get Frequency(): number;
    static get OctaveXmlDifference(): number;
    getHalfTone(): number;
    getTransposedPitch(factor: number): Pitch;
    DoEnharmonicChange(): void;
    ToString(): string;
    /** A short representation of the note like A4 (A, octave 4), Ab5 or C#4. */
    ToStringShort(octaveOffset?: number): string;
    /** A shortcut getter for ToStringShort that can be useful for debugging. */
    get ToStringShortGet(): string;
    OperatorEquals(p2: Pitch): boolean;
    OperatorNotEqual(p2: Pitch): boolean;
    OperatorFundamentalGreaterThan(p2: Pitch): boolean;
    OperatorFundamentalLessThan(p2: Pitch): boolean;
    private getHigherPitchByTransposeFactor;
    private getLowerPitchByTransposeFactor;
    private getNextFundamentalNote;
    private getPreviousFundamentalNote;
}
