
import { Card, CardContent } from "@/components/ui/card";
import { Award, Star, BadgePercent } from "lucide-react";
import { motion } from "framer-motion";

export function RewardsSummary() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <motion.div
        custom={0}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
      >
        <Card className="bg-fintech-light-purple/10 overflow-hidden">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <motion.div 
              className="h-12 w-12 rounded-full bg-fintech-light-purple/20 flex items-center justify-center mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Award className="h-6 w-6 text-fintech-purple" />
            </motion.div>
            <div className="space-y-1">
              <motion.h3 
                className="text-2xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                $120.50
              </motion.h3>
              <p className="text-sm text-muted-foreground">Total Rewards Earned</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      
      <motion.div
        custom={1}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
      >
        <Card className="bg-fintech-light-purple/10 overflow-hidden">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <motion.div 
              className="h-12 w-12 rounded-full bg-fintech-light-purple/20 flex items-center justify-center mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Star className="h-6 w-6 text-fintech-purple" />
            </motion.div>
            <div className="space-y-1">
              <motion.h3 
                className="text-2xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                7
              </motion.h3>
              <p className="text-sm text-muted-foreground">Successful Referrals</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      
      <motion.div
        custom={2}
        initial="hidden"
        animate="visible"
        variants={cardVariants}
      >
        <Card className="bg-fintech-light-purple/10 overflow-hidden">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <motion.div 
              className="h-12 w-12 rounded-full bg-fintech-light-purple/20 flex items-center justify-center mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BadgePercent className="h-6 w-6 text-fintech-purple" />
            </motion.div>
            <div className="space-y-1">
              <motion.h3 
                className="text-2xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                2.5%
              </motion.h3>
              <p className="text-sm text-muted-foreground">Average Cashback Rate</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
