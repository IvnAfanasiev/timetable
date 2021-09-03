import logging
from dataclasses import dataclass, field
from typing import Dict, Any

from timetable_genetic_algorithm.utils.Individ import Individ


class LoggerPenalty:
    def __init__(self) -> None:
        pass

    def __str__(self) -> str:
        return ""

    def __repr__(self) -> str:
        return ""


def is_dict_empty(current_dict: dict) -> bool:
    if len(current_dict) == 0:
        return True
    return False


# TODO LoggerUtils for Loggerpenalty in loop in dict Dict[timeline: LoggerUtils instance]
@dataclass
class LoggerUtils:
    penalty: Dict[int, Dict[str, int]] = field(default_factory=dict)
    best_individ: Dict[str, Any] = field(default_factory=dict)

    def penalty_for_individ(self, id_individ: int):
        whole_penalties = self.penalty.get(id_individ)
        if whole_penalties is None:
            msg = f'id={id_individ} not in dict penalty'
            logging.debug(msg)
            raise ValueError
        return sum(whole_penalties.values())

    def set_best_individ_if_best(self, current_individ: Individ):
        penalty = self.penalty_for_individ(current_individ.id_individ)
        if self.best_individ.get("penalty", float('inf')) > penalty:
            self.best_individ["instance"] = current_individ
            self.best_individ["penalty"] = penalty
