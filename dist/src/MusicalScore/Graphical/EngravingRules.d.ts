import { PagePlacementEnum } from "./GraphicalMusicPage";
import { TextAlignmentEnum } from "../../Common/Enums/TextAlignment";
import { PlacementEnum } from "../VoiceData/Expressions/AbstractExpression";
import { AutoBeamOptions, AlignRestOption, FillEmptyMeasuresWithWholeRests, SkyBottomLineBatchCalculatorBackendType } from "../../OpenSheetMusicDisplay/OSMDOptions";
import { ColoringModes as ColoringMode } from "../../Common/Enums/ColoringModes";
import { Dictionary } from "typescript-collections";
import { FontStyles } from "../../Common/Enums";
import { NoteEnum, AccidentalEnum } from "../../Common/DataObjects/Pitch";
import { ChordSymbolEnum, CustomChord } from "../../MusicalScore/VoiceData/ChordSymbolContainer";
import { GraphicalNote } from "./GraphicalNote";
import { Note } from "../VoiceData/Note";
/** Rendering and Engraving options, more fine-grained than [[IOSMDOptions]].
 *  Not all of these options are meant to be modified by users of the library,
 *  full support is only given for [[IOSMDOptions]].
 *  Nevertheless, there are many useful options here,
 *  like Render* to (not) render certain elements (e.g. osmd.rules.RenderRehearsalMarks = false)
 */
export declare class EngravingRules {
    /** A unit of distance. 1.0 is the distance between lines of a stave for OSMD, which is 10 pixels in Vexflow. */
    static unit: number;
    SamplingUnit: number;
    StaccatoShorteningFactor: number;
    /** Height (size) of the sheet title. */
    SheetTitleHeight: number;
    SheetSubtitleHeight: number;
    SheetMinimumDistanceBetweenTitleAndSubtitle: number;
    SheetComposerHeight: number;
    SheetAuthorHeight: number;
    SheetCopyrightHeight: number;
    SheetCopyrightMargin: number;
    /** Whether to use the (deprecated) OSMD < 1.8.6 way of parsing and displaying subtitles and composer,
     * which did not read multiple lines from XML credit-words tags.
     * Option will probably be removed soon.
     * @deprecated
     */
    SheetComposerSubtitleUseLegacyParsing: boolean;
    CompactMode: boolean;
    PagePlacementEnum: PagePlacementEnum;
    PageHeight: number;
    PageTopMargin: number;
    PageTopMarginNarrow: number;
    PageBottomMargin: number;
    PageLeftMargin: number;
    PageRightMargin: number;
    TitleTopDistance: number;
    TitleBottomDistance: number;
    SystemLeftMargin: number;
    SystemRightMargin: number;
    SystemLabelsRightMargin: number;
    SystemComposerDistance: number;
    SystemLyricistDistance: number;
    InstrumentLabelTextHeight: number;
    MinimumDistanceBetweenSystems: number;
    MinSkyBottomDistBetweenSystems: number;
    LastSystemMaxScalingFactor: number;
    StaffDistance: number;
    BetweenStaffDistance: number;
    StaffHeight: number;
    TabStaffInterlineHeight: number;
    BetweenStaffLinesDistance: number;
    /** Whether to automatically beam notes that don't already have beams in XML. */
    AutoBeamNotes: boolean;
    /** Options for autoBeaming like whether to beam over rests. See AutoBeamOptions interface. */
    AutoBeamOptions: AutoBeamOptions;
    /** Whether to automatically generate new beams for tabs. Also see TabBeamsRendered for existing XML beams. */
    AutoBeamTabs: boolean;
    BeamWidth: number;
    BeamSpaceWidth: number;
    BeamForwardLength: number;
    FlatBeams: boolean;
    FlatBeamOffset: number;
    FlatBeamOffsetPerBeam: number;
    ClefLeftMargin: number;
    ClefRightMargin: number;
    /** How many unique note positions a percussion score needs to have to not be rendered on one line.
     * To always use 5 lines for percussion, set this to 0. (works unless the XML says <staff-lines>1)
     */
    PercussionOneLineCutoff: number;
    PercussionForceVoicesOneLineCutoff: number;
    PercussionUseXMLDisplayStep: boolean;
    PercussionXMLDisplayStepNoteValueShift: number;
    PercussionOneLineXMLDisplayStepOctaveOffset: number;
    /** Makes the score position notes on the 2 cajon stafflines, and use 2 stafflines even if PercussionOneLineCutoff set.
     * Should only be set for cajon scores, as this will disable the PercussionOneLineCutoff.
     */
    PercussionUseCajon2NoteSystem: boolean;
    BetweenKeySymbolsDistance: number;
    KeyRightMargin: number;
    RhythmRightMargin: number;
    ShowRhythmAgainAfterPartEndOrFinalBarline: boolean;
    NewPartAndSystemAfterFinalBarline: boolean;
    InStaffClefScalingFactor: number;
    DistanceBetweenNaturalAndSymbolWhenCancelling: number;
    NoteHelperLinesOffset: number;
    MeasureLeftMargin: number;
    MeasureRightMargin: number;
    DistanceBetweenLastInstructionAndRepetitionBarline: number;
    ArpeggioDistance: number;
    IdealStemLength: number;
    StemNoteHeadBorderYOffset: number;
    StemWidth: number;
    StemMargin: number;
    StemMinLength: number;
    StemMaxLength: number;
    BeamSlopeMaxAngle: number;
    StemMinAllowedDistanceBetweenNoteHeadAndBeamLine: number;
    SetWantedStemDirectionByXml: boolean;
    GraceNoteScalingFactor: number;
    GraceNoteXOffset: number;
    GraceNoteGroupXMargin: number;
    WedgeOpeningLength: number;
    WedgeMeasureEndOpeningLength: number;
    WedgeMeasureBeginOpeningLength: number;
    WedgePlacementAboveY: number;
    WedgePlacementBelowY: number;
    WedgeHorizontalMargin: number;
    WedgeVerticalMargin: number;
    DistanceOffsetBetweenTwoHorizontallyCrossedWedges: number;
    WedgeMinLength: number;
    WedgeEndDistanceBetweenTimestampsFactor: number;
    SoftAccentWedgePadding: number;
    SoftAccentSizeFactor: number;
    DistanceBetweenAdjacentDynamics: number;
    TempoChangeMeasureValidity: number;
    TempoContinousFactor: number;
    StaccatoScalingFactor: number;
    BetweenDotsDistance: number;
    OrnamentAccidentalScalingFactor: number;
    ChordSymbolTextHeight: number;
    ChordSymbolTextAlignment: TextAlignmentEnum;
    ChordSymbolRelativeXOffset: number;
    /** Additional x-shift for short chord symbols (e.g. C, but not Eb/7), to appear more centered. */
    ChordSymbolExtraXShiftForShortChordSymbols: number;
    /** Threshold width below which to apply ChordSymbolExtraXShiftForShortChordSymbols. */
    ChordSymbolExtraXShiftWidthThreshold: number;
    ChordSymbolXSpacing: number;
    ChordOverlapAllowedIntoNextMeasure: number;
    ChordSymbolYOffset: number;
    ChordSymbolYPadding: number;
    ChordSymbolYAlignment: boolean;
    ChordSymbolYAlignmentScope: string;
    /** Offset to start of measure (barline) when chord symbol is on whole measure rest.
     * An offset of 0 would place the chord symbol directly above the barline, so the default is ~1.2.
     */
    ChordSymbolWholeMeasureRestXOffset: number;
    ChordSymbolWholeMeasureRestXOffsetMeasure1: number;
    ChordSymbolLabelTexts: Dictionary<ChordSymbolEnum, string>;
    ChordAccidentalTexts: Dictionary<AccidentalEnum, string>;
    CustomChords: CustomChord[];
    /** Not always a symbol, can also be text (RepetitionInstruction). Keeping the name for backwards compatibility. */
    RepetitionSymbolsYOffset: number;
    /** Adds a percent of the stave's width (e.g. 0.4 = 40%) to the x position of end instructions like Fine or D.C. al fine */
    RepetitionEndInstructionXShiftAsPercentOfStaveWidth: number;
    RehearsalMarkXOffset: number;
    RehearsalMarkXOffsetDefault: number;
    RehearsalMarkXOffsetSystemStartMeasure: number;
    RehearsalMarkYOffset: number;
    RehearsalMarkYOffsetDefault: number;
    RehearsalMarkFontSize: number;
    MeasureNumberLabelHeight: number;
    MeasureNumberLabelOffset: number;
    MeasureNumberLabelXOffset: number;
    /** Whether tuplets should display ratio (3:2 instead of 3 for triplet). Default false. */
    TupletsRatioed: boolean;
    /** Whether tuplets (except triplets) should be bracketed (e.g. |--5--| instead of 5). Default false.
     * Note that this doesn't affect triplets (|--3--|), which have their own setting TripletsBracketed.
     * If false, only tuplets given as bracketed in XML (bracket="yes") will be bracketed.
     * (If not given in XML, bracketing is implementation-dependent according to standard)
     */
    TupletsBracketed: boolean;
    /** Whether all triplets should be bracketed. Overrides tupletsBracketed for triplets.
     * If false, only triplets given as bracketed in XML (bracket="yes") will be bracketed.
     * (Bracketing all triplets can be cluttering)
     */
    TripletsBracketed: boolean;
    /** Whether to bracket like the XML says when 'bracket="no"' or "yes" is given.
     * Otherwise, OSMD decides bracket usage.
     * Note that sometimes the XML doesn't have any 'bracket' value. */
    TupletsBracketedUseXMLValue: boolean;
    TupletNumberLabelHeight: number;
    TupletNumberYOffset: number;
    TupletNumberLimitConsecutiveRepetitions: boolean;
    TupletNumberMaxConsecutiveRepetitions: number;
    TupletNumberAlwaysDisableAfterFirstMax: boolean;
    /** Whether to use the <tuplet show-number="value"> value or to ignore it. */
    TupletNumberUseShowNoneXMLValue: boolean;
    LabelMarginBorderFactor: number;
    TupletVerticalLineLength: number;
    /** Whether to show tuplet numbers (and brackets) in tabs. Brackets can be disabled via TabTupletsBracketed. */
    TupletNumbersInTabs: boolean;
    /** Whether to show brackets in tab tuplets. To not render tab tuplets entirely, set TupletNumbersInTabs = false. */
    TabTupletsBracketed: boolean;
    TabTupletYOffsetBottom: number;
    /** Additional offset applied to top tuplets (added to TabTupletYOffset).
     * You could apply a negative offset if the piece doesn't have effects like bends,
     * which often take some vertical space.
     */
    TabTupletYOffsetTop: number;
    TabTupletYOffsetEffects: number;
    TabBeamsRendered: boolean;
    TabKeySignatureRendered: boolean;
    /** Whether space should be reserved as if there was a key signature.
     * False basically only works for tab-only scores, as it prevents vertical x-alignment with other staves.
     * False is more compact for tab-only scores.
     */
    TabKeySignatureSpacingAdded: boolean;
    TabTimeSignatureRendered: boolean;
    /** Whether space should be reserved as if there was a key signature.
     * False basically only works for tab-only scores, as it prevents vertical x-alignment with other staves.
     * False is more compact for tab-only scores.
     */
    TabTimeSignatureSpacingAdded: boolean;
    TabFingeringsRendered: boolean;
    RepetitionAllowFirstMeasureBeginningRepeatBarline: boolean;
    RepetitionEndingLabelHeight: number;
    RepetitionEndingLabelXOffset: number;
    RepetitionEndingLabelYOffset: number;
    RepetitionEndingLineYLowerOffset: number;
    RepetitionEndingLineYUpperOffset: number;
    VoltaOffset: number;
    /** Default alignment of lyrics.
     * Left alignments will extend text to the right of the bounding box,
     * which facilitates spacing by extending measure width.
     */
    LyricsAlignmentStandard: TextAlignmentEnum;
    LyricsHeight: number;
    LyricsYOffsetToStaffHeight: number;
    LyricsYMarginToBottomLine: number;
    /** Extra x-shift (to the right) for short lyrics to be better vertically aligned.
     * Also see ChordSymbolExtraXShiftForShortChordSymbols, same principle, same default value.
     */
    LyricsExtraXShiftForShortLyrics: number;
    /** Threshold of the lyric entry's width below which the x-shift is applied. Default 1.4. */
    LyricsExtraXShiftForShortLyricsWidthThreshold: number;
    /** Whether to enable x padding (to the right) for notes with long lyrics, see LyricsXPaddingFactorForLongLyrics for the degree.
     * This helps avoid overlaps and shorten measures, because otherwise the whole measure needs to be stretched to avoid overlaps,
     * see MaximumLyricsElongationFactor */
    LyricsUseXPaddingForLongLyrics: boolean;
    /** How much spacing/padding should be added after notes with long lyrics on short notes
     * (>4 characters on <8th note),
     * so that the measure doesn't need to be elongated too much to avoid lyrics collisions.
     * Default 1 = 10 pixels */
    LyricsXPaddingFactorForLongLyrics: number;
    /** How wide a text needs to be to trigger lyrics padding for short notes.
     * This is visual width, not number of characters, as e.g. 'zzz' is wider than 'iii'.
     * Default 3.3.
     */
    LyricsXPaddingWidthThreshold: number;
    /** Long notes need less padding than short ones, by default we use 0.7 less padding. */
    LyricsXPaddingReductionForLongNotes: number;
    /** Last note in measure needs less padding because of measure bar and bar start/end padding. */
    LyricsXPaddingReductionForLastNoteInMeasure: number;
    LyricsXPaddingForLastNoteInMeasure: boolean;
    VerticalBetweenLyricsDistance: number;
    HorizontalBetweenLyricsDistance: number;
    BetweenSyllableMaximumDistance: number;
    BetweenSyllableMinimumDistance: number;
    LyricOverlapAllowedIntoNextMeasure: number;
    MinimumDistanceBetweenDashes: number;
    MaximumLyricsElongationFactor: number;
    SlurPlacementFromXML: boolean;
    SlurPlacementAtStems: boolean;
    SlurPlacementUseSkyBottomLine: boolean;
    BezierCurveStepSize: number;
    TPower3: number[];
    OneMinusTPower3: number[];
    FactorOne: number[];
    FactorTwo: number[];
    TieGhostObjectWidth: number;
    TieYPositionOffsetFactor: number;
    MinimumNeededXspaceForTieGhostObject: number;
    TieHeightMinimum: number;
    TieHeightMaximum: number;
    TieHeightInterpolationK: number;
    TieHeightInterpolationD: number;
    SlurNoteHeadYOffset: number;
    SlurEndArticulationYOffset: number;
    SlurStartArticulationYOffsetOfArticulation: number;
    SlurStemXOffset: number;
    SlurSlopeMaxAngle: number;
    SlurTangentMinAngle: number;
    SlurTangentMaxAngle: number;
    SlurHeightFactor: number;
    SlurHeightFlattenLongSlursFactorByWidth: number;
    SlurHeightFlattenLongSlursFactorByAngle: number;
    SlurHeightFlattenLongSlursCutoffAngle: number;
    SlurHeightFlattenLongSlursCutoffWidth: number;
    SlursStartingAtSameStaffEntryYOffset: number;
    SlurMaximumYControlPointDistance: number;
    GlissandoNoteOffset: number;
    GlissandoStafflineStartMinimumWidth: number;
    GlissandoStafflineStartYDistanceToNote: number;
    GlissandoStafflineEndOffset: number;
    GlissandoDefaultWidth: number;
    TempoYSpacing: number;
    InstantaneousTempoTextHeight: number;
    ContinuousDynamicTextHeight: number;
    MoodTextHeight: number;
    UnknownTextHeight: number;
    ContinuousTempoTextHeight: number;
    VexFlowDefaultNotationFontScale: number;
    VexFlowDefaultTabFontScale: number;
    TremoloStrokeScale: number;
    TremoloYSpacingScale: number;
    TremoloBuzzRollThickness: number;
    StaffLineWidth: number;
    StaffLineColor: string;
    LedgerLineWidth: number;
    LedgerLineStrokeStyle: string;
    LedgerLineColorDefault: string;
    WedgeLineWidth: number;
    TupletLineWidth: number;
    LyricUnderscoreLineWidth: number;
    SystemThinLineWidth: number;
    SystemBoldLineWidth: number;
    SystemRepetitionEndingLineWidth: number;
    SystemDotWidth: number;
    MultipleRestMeasureDefaultWidth: number;
    MultipleRestMeasureAddKeySignature: boolean;
    /** Use the same measure width for all measures (experimental).
     *  Note that this will use the largest width of all measures,
     *  as Vexflow will mess up the layout with overlays if using less than minimum width.
     *  See formatter.preCalculateMinTotalWidth()
     */
    FixedMeasureWidth: boolean;
    /** Use a fixed width for all measures (experimental).
     *  This is mostly for debugging or for when you already know how big the measures
     *  in the target score are, because using a too low width will cause overlaps in Vexflow.
     */
    FixedMeasureWidthFixedValue: number;
    FixedMeasureWidthUseForPickupMeasures: boolean;
    DistanceBetweenVerticalSystemLines: number;
    DistanceBetweenDotAndLine: number;
    RepeatEndStartPadding: number;
    OctaveShiftLineWidth: number;
    OctaveShiftVerticalLineLength: number;
    OctaveShiftOnWholeMeasureNoteUntilEndOfMeasure: boolean;
    GraceLineWidth: number;
    MinimumStaffLineDistance: number;
    MinSkyBottomDistBetweenStaves: number;
    MinimumCrossedBeamDifferenceMargin: number;
    /** Maximum width of sheet / HTMLElement containing the score. Canvas is limited to 32767 in current browsers, though SVG isn't.
     *  Setting this to > 32767 will break the canvas backend (no problem if you only use SVG).
     */
    SheetMaximumWidth: number;
    VoiceSpacingMultiplierVexflow: number;
    VoiceSpacingAddendVexflow: number;
    PickupMeasureWidthMultiplier: number;
    /** The spacing between a repetition that is followed by an implicit/pickup/incomplete measure.
     *  (E.g. in a 4/4 time signature, a measure that repeats after the 3rd beat, continuing with a pickup measure)
     */
    PickupMeasureRepetitionSpacing: number;
    /** Multiplier for PickupMeasureRepetitionSpacing if there is only one note in the pickup measure. This usually needs a lot more space. */
    PickupMeasureSpacingSingleNoteAddend: number;
    DisplacedNoteMargin: number;
    MinNoteDistance: number;
    SubMeasureXSpacingThreshold: number;
    MeasureDynamicsMaxScalingFactor: number;
    WholeRestXShiftVexflow: number;
    MetronomeMarksDrawn: boolean;
    MetronomeMarkXShift: number;
    MetronomeMarkYShift: number;
    SoftmaxFactorVexFlow: number;
    /** Stagger (x-shift) whole notes that are the same note, but in different voices (show 2 instead of 1). */
    StaggerSameWholeNotes: boolean;
    MaxInstructionsConstValue: number;
    NoteDistances: number[];
    NoteDistancesScalingFactors: number[];
    DurationDistanceDict: {
        [_: number]: number;
    };
    DurationScalingDistanceDict: {
        [_: number]: number;
    };
    /** Whether to align rests. 0 = Never, 1 = Always, 2 = Auto.
     * Currently not recommended because rests are now positioned to avoid collisions with notes. */
    AlignRests: AlignRestOption;
    RestCollisionYPadding: number;
    FillEmptyMeasuresWithWholeRest: FillEmptyMeasuresWithWholeRests | number;
    ArpeggiosGoAcrossVoices: boolean;
    RenderArpeggios: boolean;
    RenderSlurs: boolean;
    RenderGlissandi: boolean;
    ColoringMode: ColoringMode;
    ColoringEnabled: boolean;
    ColorStemsLikeNoteheads: boolean;
    ColorFlags: boolean;
    ColorBeams: boolean;
    ColoringSetCurrent: Dictionary<NoteEnum | number, string>;
    /** Default color for all musical elements including key signature etc. Default undefined. */
    DefaultColorMusic: string;
    DefaultColorNotehead: string;
    DefaultColorRest: string;
    DefaultColorStem: string;
    DefaultColorLabel: string;
    DefaultColorLyrics: string;
    DefaultColorChordSymbol: string;
    DefaultColorTitle: string;
    DefaultColorCursor: string;
    DefaultFontFamily: string;
    DefaultFontStyle: FontStyles;
    DefaultVexFlowNoteFont: string;
    MaxMeasureToDrawIndex: number;
    MinMeasureToDrawIndex: number;
    MaxPageToDrawNumber: number;
    MaxSystemToDrawNumber: number;
    /** Whether to render a label for the composer of the piece at the top of the sheet. */
    RenderComposer: boolean;
    RenderTitle: boolean;
    RenderSubtitle: boolean;
    RenderLyricist: boolean;
    RenderCopyright: boolean;
    RenderPartNames: boolean;
    RenderPartAbbreviations: boolean;
    /** Whether two render system labels on page 2+. This doesn't affect the default endless PageFormat. */
    RenderSystemLabelsAfterFirstPage: boolean;
    RenderFingerings: boolean;
    RenderMeasureNumbers: boolean;
    RenderMeasureNumbersOnlyAtSystemStart: boolean;
    UseXMLMeasureNumbers: boolean;
    RenderLyrics: boolean;
    RenderChordSymbols: boolean;
    RenderMultipleRestMeasures: boolean;
    AutoGenerateMultipleRestMeasuresFromRestMeasures: boolean;
    RenderRehearsalMarks: boolean;
    RenderClefsAtBeginningOfStaffline: boolean;
    RenderKeySignatures: boolean;
    RenderTimeSignatures: boolean;
    RenderPedals: boolean;
    RenderWavyLines: boolean;
    DynamicExpressionMaxDistance: number;
    DynamicExpressionSpacer: number;
    IgnoreRepeatedDynamics: boolean;
    ExpressionsUseXMLColor: boolean;
    MpatMode: boolean;
    ArticulationPlacementFromXML: boolean;
    /** Percent distance of breath marks to next note or end of staff, e.g. 0.8 = 80%. */
    BreathMarkDistance: number;
    /** Where to draw fingerings (Above, Below, AboveOrBelow, Left, Right, or Auto).
     * Default AboveOrBelow. Auto experimental. */
    FingeringPosition: PlacementEnum;
    FingeringPositionFromXML: boolean;
    FingeringPositionGrace: PlacementEnum;
    FingeringInsideStafflines: boolean;
    FingeringLabelFontHeight: number;
    FingeringOffsetX: number;
    FingeringOffsetY: number;
    FingeringPaddingY: number;
    FingeringTextSize: number;
    /** Whether to render string numbers in classical scores, i.e. not the string numbers in tabs, but e.g. for violin. */
    RenderStringNumbersClassical: boolean;
    /** This is not for tabs, but for classical scores, especially violin. */
    StringNumberOffsetY: number;
    NewSystemAtXMLNewSystemAttribute: boolean;
    /** Whether to begin a new system when a page break is given in XML ('new-page="yes"'), but newPageFromXML is false.
     *  Default false, because it can lead to nonsensical system breaks after a single measure,
     *  as OSMD does a different layout than the original music program exported from.
     * */
    NewSystemAtXMLNewPageAttribute: boolean;
    NewPageAtXMLNewPageAttribute: boolean;
    UseJustifiedBuilder: boolean;
    PageFormat: PageFormat;
    PageBackgroundColor: string;
    PerformanceMode: boolean;
    RenderSingleHorizontalStaffline: boolean;
    RestoreCursorAfterRerender: boolean;
    StretchLastSystemLine: boolean;
    /** Ignore brackets - e.g. `( )` - that were supposed to be around a note,
     * but were inserted as a words element in the MusicXML, which can't be matched to the note anymore,
     * and would otherwise just be placed somewhere else. See OSMD Issue 1251. */
    IgnoreBracketsWords: boolean;
    PlaceWordsInsideStafflineFromXml: boolean;
    PlaceWordsInsideStafflineYOffset: number;
    SpacingBetweenTextLines: number;
    NoteToGraphicalNoteMap: Dictionary<number, GraphicalNote>;
    NoteToGraphicalNoteMapObjectCount: number;
    /** How many times osmd.render() was already called on the currently loaded score.
     * Resets after osmd.load() (via osmd.reset()).
     * Can be relevant for transposition or generally informative.
     */
    RenderCount: number;
    /** The skyline and bottom-line batch calculation algorithm to use.
     *  Note that this can be overridden if AlwaysSetPreferredSkyBottomLineBackendAutomatically is true (which is the default).
     */
    PreferredSkyBottomLineBatchCalculatorBackend: SkyBottomLineBatchCalculatorBackendType;
    /** Whether to consider using WebGL in Firefox in EngravingRules.setPreferredSkyBottomLineBackendAutomatically() */
    DisableWebGLInFirefox: boolean;
    /** Whether to consider using WebGL in Safari/iOS in EngravingRules.setPreferredSkyBottomLineBackendAutomatically() */
    DisableWebGLInSafariAndIOS: boolean;
    /** The minimum number of measures in the sheet where the skyline and bottom-line batch calculation is enabled.
     *  Batch is faster for medium to large size scores, but slower for very short scores.
     */
    SkyBottomLineBatchMinMeasures: number;
    /** The minimum number of measures in the sheet where WebGL will be used. WebGL is slower for short scores, but much faster for large ones.
     * Note that WebGL is currently never used in Safari and Firefox, because it's always slower there.
     */
    SkyBottomLineWebGLMinMeasures: number;
    /** Whether to always set preferred backend (WebGL or Plain) automatically, depending on browser and number of measures. */
    AlwaysSetPreferredSkyBottomLineBackendAutomatically: boolean;
    PlayAlreadyStartedNotesFromCursorPosition: boolean;
    /** The interval between current timer position and note timestamp beyond which notes are not played.
     * If you experience notes being skipped during playback, try increasing this interval slightly (e.g. 0.02 -> 0.03).
     */
    PlaybackSkipNotesSafetyInterval: number;
    /** Whether to use OSMD's default voice entry interaction listener that plays voice entry on click etc. */
    UseDefaultVoiceInteractionListener: boolean;
    LimitCursorPositionToCurrentMeasure: boolean;
    constructor();
    loadDefaultValues(): void;
    setPreferredSkyBottomLineBackendAutomatically(numberOfGraphicalMeasures?: number): void;
    /** Makes it so that all musical elements (including key/time signature)
     *  are colored with the given color by default,
     *  unless an element has a different color set (e.g. VoiceEntry.StemColor).
     */
    applyDefaultColorMusic(color: string): void;
    addGraphicalNoteToNoteMap(note: Note, graphicalNote: GraphicalNote): void;
    /** Returns the GraphicalNote corresponding to (its) note. Also used by Cursor.GNotesUnderCursor().
     *  We don't want to save a GraphicalNote reference in Note, see Note.NoteToGraphicalNoteObjectId.
     */
    GNote(note: Note): GraphicalNote;
    /** This should be done before a new sheet is loaded, not each re-render (otherwise the map would end empty). */
    clearMusicSheetObjects(): void;
    resetChordAccidentalTexts(chordAccidentalTexts: Dictionary<AccidentalEnum, string>, useChordAccidentalsUnicode: boolean): void;
    setChordSymbolLabelText(key: ChordSymbolEnum, value: string): void;
    resetChordSymbolLabelTexts(chordtexts: Dictionary<ChordSymbolEnum, string>): Dictionary<ChordSymbolEnum, string>;
    addChordName(altName: string, chordKindText: string, adds: string[], alts: string[], subs: string[]): void;
    renameChord(altName: string, newAltName: string): void;
    resetChordNames(): void;
    /**
     * This method maps NoteDurations to Distances and DistancesScalingFactors.
     */
    /**
     * Calculate Curve-independend factors, to be used later in the Slur- and TieCurvePoints calculation
     */
    private calculateCurveParametersArrays;
}
export declare class PageFormat {
    constructor(width: number, height: number, idString?: string);
    width: number;
    height: number;
    idString: string;
    get aspectRatio(): number;
    /** Undefined page format: use default page format. */
    get IsUndefined(): boolean;
    static get UndefinedPageFormat(): PageFormat;
    Equals(otherPageFormat: PageFormat): boolean;
}
