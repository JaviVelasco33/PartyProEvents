export interface Event {
    id: number;
    title: string;
    category: EventCategory;
    image: string;
    description: string;
    date: string;
    guests: number;
}
type EventCategory = 'corporate' | 'birthday' | 'wedding' | 'graduation' | 'other';
export {};
//# sourceMappingURL=event.d.ts.map