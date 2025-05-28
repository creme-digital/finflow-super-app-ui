import React from "react";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

export default function ComponentShowcase() {
  return (
    <div className="p-8 space-y-12">
      <h1 className="text-2xl font-bold mb-8">UI Component Showcase (Hidden)</h1>

      {/* Tags/Badges */}
      <section>
        <h2 className="text-lg font-semibold mb-2">Tags / Badges</h2>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground w-28">TagPurple</span>
            <Badge bgColor="#E3E3EA" textColor="#0B062F" style={{ borderRadius: 6, fontWeight: 500, fontSize: 13, padding: '2px 12px', display: 'inline-block' }}>Purple</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground w-28">TagRed</span>
            <Badge bgColor="#EBC9C9" textColor="#1D0202" style={{ borderRadius: 6, fontWeight: 500, fontSize: 13, padding: '2px 12px', display: 'inline-block' }}>Red</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground w-28">TagGrey</span>
            <Badge bgColor="#DADADA" textColor="#2C2C2C" style={{ borderRadius: 6, fontWeight: 500, fontSize: 13, padding: '2px 12px', display: 'inline-block' }}>Grey</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground w-28">TagGreen</span>
            <Badge bgColor="#C9EBCC" textColor="#021B0D" style={{ borderRadius: 6, fontWeight: 500, fontSize: 13, padding: '2px 12px', display: 'inline-block' }}>Green</Badge>
          </div>
        </div>
      </section>

      {/* Table */}
      <section>
        <h2 className="text-lg font-semibold mb-2">Table</h2>
        <div className="mb-2 text-xs text-muted-foreground">TableDefault</div>
        <div className="rounded-[8px] border border-[#E3E3EA] overflow-hidden">
          <Table className="min-w-full">
            <TableHeader>
              <TableRow style={{ background: '#F8F8FA' }}>
                <TableHead
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 12,
                    letterSpacing: '-0.02em',
                    textTransform: 'uppercase',
                    color: '#9898A5',
                    fontWeight: 500,
                  }}
                  className="py-3"
                >
                  Name
                </TableHead>
                <TableHead
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 12,
                    letterSpacing: '-0.02em',
                    textTransform: 'uppercase',
                    color: '#9898A5',
                    fontWeight: 500,
                  }}
                  className="py-3"
                >
                  Email
                </TableHead>
                <TableHead
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 12,
                    letterSpacing: '-0.02em',
                    textTransform: 'uppercase',
                    color: '#9898A5',
                    fontWeight: 500,
                  }}
                  className="py-3"
                >
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Jane Doe</TableCell>
                <TableCell>jane@meely.com</TableCell>
                <TableCell>
                  {/* TagDefault */}
                  <Badge bgColor="#E3E3EA" textColor="#0B062F" style={{ borderRadius: 6, fontWeight: 500, fontSize: 13, padding: '2px 12px', display: 'inline-block' }}>Default</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>John Smith</TableCell>
                <TableCell>john@meely.com</TableCell>
                <TableCell>
                  {/* TagSecondary */}
                  <Badge bgColor="#EBC9C9" textColor="#1D0202" style={{ borderRadius: 6, fontWeight: 500, fontSize: 13, padding: '2px 12px', display: 'inline-block' }}>Secondary</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Anna Lee</TableCell>
                <TableCell>anna@meely.com</TableCell>
                <TableCell>
                  {/* TagDestructive */}
                  <Badge bgColor="#DADADA" textColor="#2C2C2C" style={{ borderRadius: 6, fontWeight: 500, fontSize: 13, padding: '2px 12px', display: 'inline-block' }}>Destructive</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Mike Brown</TableCell>
                <TableCell>mike@meely.com</TableCell>
                <TableCell>
                  {/* TagOutline */}
                  <Badge bgColor="#C9EBCC" textColor="#021B0D" style={{ borderRadius: 6, fontWeight: 500, fontSize: 13, padding: '2px 12px', display: 'inline-block' }}>Outline</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Tabs */}
      <section>
        <h2 className="text-lg font-semibold mb-2">Tabs</h2>
        <div className="mb-2 text-xs text-muted-foreground">TabsDefault</div>
        <Tabs defaultValue="account">
          <TabsList
            style={{
              display: 'inline-flex',
              padding: 3,
              alignItems: 'center',
              gap: 2,
              borderRadius: 8,
              background: '#F8F8FA',
            }}
          >
            <TabsTrigger
              value="account"
              style={{
                display: 'flex',
                padding: '6px 8px',
                alignItems: 'center',
                gap: 8,
                borderRadius: 6,
                fontFamily: 'Inter, sans-serif',
                fontSize: 14,
                letterSpacing: '-0.02em',
                fontWeight: 500,
              }}
              className="data-[state=active]:bg-white data-[state=active]:text-[#18181B] data-[state=active]:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.25)_inset,0px_2px_8px_-2px_rgba(0,0,0,0.18),0px_0px_0px_1px_rgba(198,198,209,0.16)] data-[state=inactive]:bg-transparent data-[state=inactive]:shadow-none data-[state=inactive]:text-[#9898A5]"
            >
              Account
            </TabsTrigger>
            <TabsTrigger
              value="password"
              style={{
                display: 'flex',
                padding: '6px 8px',
                alignItems: 'center',
                gap: 8,
                borderRadius: 6,
                fontFamily: 'Inter, sans-serif',
                fontSize: 14,
                letterSpacing: '-0.02em',
                fontWeight: 500,
              }}
              className="data-[state=active]:bg-white data-[state=active]:text-[#18181B] data-[state=active]:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.25)_inset,0px_2px_8px_-2px_rgba(0,0,0,0.18),0px_0px_0px_1px_rgba(198,198,209,0.16)] data-[state=inactive]:bg-transparent data-[state=inactive]:shadow-none data-[state=inactive]:text-[#9898A5]"
            >
              Password
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">Account tab content</TabsContent>
          <TabsContent value="password">Password tab content</TabsContent>
        </Tabs>
      </section>

      {/* Dropdown (Select) */}
      <section>
        <h2 className="text-lg font-semibold mb-2">Dropdown (Select)</h2>
        <div className="mb-2 text-xs text-muted-foreground">DropdownDefault</div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </section>

      {/* Radio Group */}
      <section>
        <h2 className="text-lg font-semibold mb-2">Radio Group</h2>
        <div className="mb-2 text-xs text-muted-foreground">RadioDefault</div>
        <RadioGroup defaultValue="a" className="flex gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground w-28">RadioDefaultA</span>
            <RadioGroupItem value="a" id="r1" />
            <label htmlFor="r1">Option A</label>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground w-28">RadioDefaultB</span>
            <RadioGroupItem value="b" id="r2" />
            <label htmlFor="r2">Option B</label>
          </div>
        </RadioGroup>
      </section>

      {/* Checkbox */}
      <section>
        <h2 className="text-lg font-semibold mb-2">Checkbox</h2>
        <div className="mb-2 text-xs text-muted-foreground">CheckboxDefault</div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground w-32">CheckboxDefault1</span>
            <Checkbox id="c1" />
            <label htmlFor="c1">Accept terms</label>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground w-32">CheckboxDefault2</span>
            <Checkbox id="c2" />
            <label htmlFor="c2">Subscribe</label>
          </div>
        </div>
      </section>

      {/* Status Tags (Custom Styles) */}
      <section>
        <h2 className="text-lg font-semibold mb-2">Status Tags (Custom)</h2>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground w-32">TagStatusSent</span>
            <span style={{ background: '#E3E3EA', color: '#0B062F', borderRadius: 6, fontWeight: 500, fontSize: 13, padding: '2px 12px', display: 'inline-block' }}>Sent</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground w-32">TagStatusLate</span>
            <span style={{ background: '#EBC9C9', color: '#1D0202', borderRadius: 6, fontWeight: 500, fontSize: 13, padding: '2px 12px', display: 'inline-block' }}>Late</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground w-32">TagStatusUnpaid</span>
            <span style={{ background: '#DADADA', color: '#2C2C2C', borderRadius: 6, fontWeight: 500, fontSize: 13, padding: '2px 12px', display: 'inline-block' }}>Unpaid</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground w-32">TagStatusPaid</span>
            <span style={{ background: '#C9EBCC', color: '#021B0D', borderRadius: 6, fontWeight: 500, fontSize: 13, padding: '2px 12px', display: 'inline-block' }}>Paid</span>
          </div>
        </div>
      </section>
    </div>
  );
} 