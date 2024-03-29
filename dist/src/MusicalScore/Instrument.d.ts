import { InstrumentalGroup } from "./InstrumentalGroup";
import { Label } from "./Label";
import { MusicSheet } from "./MusicSheet";
import { Voice } from "./VoiceData/Voice";
import { Staff } from "./VoiceData/Staff";
import { SubInstrument } from "./SubInstrument";
import { MidiInstrument } from "./VoiceData/Instructions/ClefInstruction";
export declare class Instrument extends InstrumentalGroup {
    constructor(id: number, idString: string, musicSheet: MusicSheet, parent: InstrumentalGroup);
    /** Transposition halftones for this instrument only.
     *  This is additive to osmd.Sheet.Transpose (MusicSheet).
     *  osmd.TransposeCaculator needs to be defined/created for this to take effect. (just set it with new TransposeCalculator())
     * You need to call osmd.updateGraphic() before the next render() (assuming this is set after load()).
     */
    Transpose: number;
    highlight: boolean;
    private voices;
    private staves;
    private nameLabel;
    private idString;
    private id;
    private hasLyrics;
    private hasChordSymbols;
    private playbackTranspose;
    private lyricVersesNumbers;
    private subInstruments;
    private partAbbreviation;
    get Voices(): Voice[];
    get Staves(): Staff[];
    get NameLabel(): Label;
    get HasLyrics(): boolean;
    set HasLyrics(value: boolean);
    get HasChordSymbols(): boolean;
    set HasChordSymbols(value: boolean);
    get LyricVersesNumbers(): string[];
    set LyricVersesNumbers(value: string[]);
    get Name(): string;
    set Name(value: string);
    get IdString(): string;
    get Id(): number;
    get MidiInstrumentId(): MidiInstrument;
    set MidiInstrumentId(value: MidiInstrument);
    get Volume(): number;
    set Volume(value: number);
    get PlaybackTranspose(): number;
    set PlaybackTranspose(value: number);
    get SubInstruments(): SubInstrument[];
    getSubInstrument(subInstrumentIdString: string): SubInstrument;
    get PartAbbreviation(): string;
    set PartAbbreviation(value: string);
    get Visible(): boolean;
    set Visible(value: boolean);
    get Audible(): boolean;
    set Audible(value: boolean);
    get Solo(): boolean;
    set Solo(value: boolean);
    get Following(): boolean;
    set Following(value: boolean);
    SetVoiceAudible(voiceId: number, audible: boolean): void;
    SetVoiceFollowing(voiceId: number, following: boolean): void;
    SetStaffAudible(staffId: number, audible: boolean): void;
    SetStaffFollow(staffId: number, follow: boolean): void;
    areAllVoiceVisible(): boolean;
    createStaves(numberOfStaves: number): void;
    toString(): string;
}
